# Briq Simulated Backend (for Frontend Coding Assignment)

This is a backend used to complete the Briq frontend assignment.

## About backends at Briq

Briq uses .NET, and PHP + Laravel for the backend. However, this assignment provides a Node backend, to make it easy to run with frontend tooling.

## Running the backend

There are zero dependencies, you can run the server at `http://localhost:5000` with:

```bash
node server.js
```

If you _really_ can't get the backend to run, you could consider using `./data.js` directly in the frontend.

## Endpoints

Here's a list of available end points:

```http
# Root of the server returns a short description.
GET /


# Returns reverse chronological list of recent bookings; optionally provide maximum number of results as a query string parameter.
GET /api/v1/bookings?limit={count}


# Returns a booking by its uuid
GET /api/v1/bookings/{id}


# Returns aggregated statistics to show on the dashobard.
GET /api/v1/bookings/stats


# Returns a list of open front desk alerts to be handled.
GET /api/v1/bookings/front-desk-alert


# Notify front desk about a specific booking
POST /api/v1/bookings/front-desk-alert
content-type: application/json

{
  "bookingId": "{uuid for booking}",
  "reason": "optional textual reason for investigating this booking"
}
```
