const Bus = require("./bus");
const Person = require("./person")

const bus = new Bus(48, 'America')
const person = new Person("Brian", 30)

bus.drive(10)
console.log(bus)

const numberOfPassengers = bus.getNumberOfPassengers()
console.log(numberOfPassengers)

bus.pickUpPassengers(person)
console.log(bus)

const numberOfPassengersNow = bus.getNumberOfPassengers()
console.log(numberOfPassengersNow)