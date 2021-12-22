const http = require("http");
const fs = require("fs");
const { bookings, stats } = require("./data");
const {
  log,
  getPostBody,
  giveServerResponse,
  isForIncomingMessage,
  compareBookingsDescending,
} = require("./util");

const PORT = process.env.PORT || 5000;
const SIMULATED_INSTABILITY = parseFloat(
  process.env.SIMULATED_INSTABILITY || 0.05
);
const readme = fs.readFileSync("./README.md", "utf8");

// Simulated 'Database' of front-desk alerts
const frontDeskAlerts = [];

http.ServerResponse.prototype.give = giveServerResponse;
http.IncomingMessage.prototype.isFor = isForIncomingMessage;

const server = http.createServer(async (request, response) => {
  log(`Serving ${request.method} ${request.url}`);

  // OPTIONS
  if (request.method === "OPTIONS") {
    response.give(204);
  }

  // GET /
  else if (request.isFor("GET", /^\/?$/)) {
    response.give(
      200,
      "Your server is running!\n\n----\n\n" + readme,
      "text/markdown"
    );
  }

  // Simulate somewhat unstable server:
  else if (Math.random() < SIMULATED_INSTABILITY) {
    Math.random() < 0.75
      ? response.give(
          500,
          "An internal server error occurred (simulated by server)"
        )
      : response.give(503, "Temporarily unavailable (simulated by server)");
  }

  // GET /api/v1/bookings
  else if (request.isFor("GET", /^\/api\/v1\/bookings\/?(\?limit=\d+)?$/)) {
    const matches = request.url.match(/\?limit=(\d+)$/);
    const limit = parseInt(matches ? matches[1] : 15) || 15;
    response.give(
      200,
      bookings.sort(compareBookingsDescending).slice(0, limit)
    );
  }

  // GET /api/v1/bookings/{id}
  else if (request.isFor("GET", /^\/api\/v1\/bookings\/([a-fA-F0-9-]+)\/?$/)) {
    const id = request.url.match(/\/([a-fA-F0-9-]+)$/)[1];
    const booking = bookings.find((b) => b.id === id);
    booking
      ? response.give(200, booking)
      : response.give(404, { message: "Not Found" });
  }

  // GET /api/v1/bookings/stats
  else if (request.isFor("GET", /^\/api\/v1\/bookings\/stats\/?$/)) {
    response.give(200, { ...stats, fetchedAtUtc: new Date().toISOString() });
  }

  // GET /api/v1/bookings/front-desk-alert
  else if (request.isFor("GET", /^\/api\/v1\/bookings\/front-desk-alert\/?$/)) {
    response.give(200, {
      frontDeskAlerts,
      fetchedAtUtc: new Date().toISOString(),
    });
  }

  // POST /api/v1/bookings/front-desk-alert
  else if (
    request.isFor("POST", /^\/api\/v1\/bookings\/front-desk-alert\/?$/)
  ) {
    try {
      const body = await getPostBody(request);
      if (!body.bookingId) {
        throw "Bad Request: missing bookingId field on payload";
      }
      if (!bookings.find((b) => b.id === body.bookingId)) {
        throw "Bad Request: bookingId was not a uuid for a recent booking";
      }
      frontDeskAlerts.push({
        bookingId: body.bookingId,
        reason:
          body.reason || "No reason provided, but please review this booking.",
        timestamp: new Date().toISOString(),
      });
      response.give(204);
    } catch (error) {
      response.give(error === "Unsupported Media Type" ? 415 : 400, { error });
    }
  }

  // Fallback 404 route
  else {
    response.give(404, { message: "Not Found" });
  }
});

server.listen(PORT, () =>
  log(
    `Server ready at port ${PORT} - simulating server errors with probability of ${SIMULATED_INSTABILITY}`
  )
);
