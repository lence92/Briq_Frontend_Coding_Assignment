const colors = {
  reset: "\x1b[0m",
  okay: "\x1b[32m",
  warn: "\x1b[33m",
  error: "\x1b[31m",
};

function log(message) {
  console.log(
    `${colors.reset}${new Date().toLocaleTimeString()} ${message}${
      colors.reset
    }`
  );
}

function getPostBody(request) {
  return new Promise((resolve, reject) => {
    if (request.headers["content-type"] !== "application/json") {
      console.log("headers", request.headers);
      return reject("Unsupported Media Type");
    }
    try {
      let result = "";
      request.on("data", (chunk) => (result += chunk.toString()));
      request.on("end", () => resolve(JSON.parse(result)));
    } catch (error) {
      reject(error);
    }
  });
}

function giveServerResponse(
  httpStatus,
  data,
  contentType = "application/json"
) {
  const color =
    httpStatus < 300
      ? colors.okay
      : httpStatus < 500
      ? colors.warn
      : colors.error;

  log(`${color}Responding with http status ${httpStatus}`);

  this.setHeader("Access-Control-Allow-Origin", "*");
  this.setHeader("Access-Control-Allow-Headers", "Content-Type");
  this.setHeader("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
  this.setHeader("Access-Control-Max-Age", 60 * 60 * 24 * 30);

  this.writeHead(httpStatus, { "Content-Type": contentType });

  httpStatus === 204
    ? this.end()
    : this.end(
        contentType === "application/json" ? JSON.stringify(data) : data
      );
}

function isForIncomingMessage(method, pattern) {
  return this.method === method && this.url.match(pattern);
}

function compareBookingsDescending(left, right) {
  return -left.bookedAt.localeCompare(right.bookedAt);
}

module.exports = {
  log,
  getPostBody,
  giveServerResponse,
  isForIncomingMessage,
  compareBookingsDescending,
};
