/* --------------------------------- Airline -------------------------------- */

const passengers = [
  { id: 1, fullName: "Assaf", flights: [] },
  { id: 2, fullName: "Orel", flights: [] },
  //   { id: 3, fullName: "Naruto", flights: [] },
  //   { id: 4, fullName: "Luffy", flights: [] },
  //   { id: 5, fullName: "Gon", flights: [] },
];

const planes = [
  { model: "boieng7", seatCount: 180 },
  { model: "airbus3", seatCount: 220 },
];

const flights = [
  {
    date: "17-06-20",
    departure: "12:00",
    destination: "Israel",
    plane: planes[0],
    passengers: [],
  },
  {
    date: "22-06-20",
    departure: "18:00",
    destination: "New York",
    plane: planes[1],
    passengers: [],
  },
];

function createPassenger(fullName, flights) {}

createPassenger("Orel Hassid", flights[0]);

function bookFlight(flight, passenger) {
  if (isFlightFullyBooked(flight)) {
    return console.error("Flight is full.");
  }
  if (!passenger) return console.error("No Passenger.");
  // 1. Add flights to passenger
  passenger.flights.push(flight);
  // 2. Add passenger to flights
  flight.passengers.push(passenger);
}

bookFlight(flights[0], passengers[0]);
bookFlight(flights[0], passengers[0]);
bookFlight(flights[0], passengers[1]);
bookFlight(flights[0], passengers[1]);
bookFlight(flights[0], passengers[1]);

function getFrequentFlyers() {
  const sorted = passengers.sort(function (a, b) {
    return a.flights.length - b.flights.length;
  });
  return sorted[sorted.length - 1];
}

const higherPassenger = getFrequentFlyers();
console.log("higherPassenger", higherPassenger);

function isFlightFullyBooked(flight) {
  return flight.passengers.length >= flight.plane.seatCount ? true : false;
}

console.log("flights", flights);
/*
function createPassenger(fullName, flights);
*/
