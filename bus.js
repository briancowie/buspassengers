const Bus = function(routeNumber, destination){
    this.routeNumber = routeNumber
    this.distance = 0
    this.destination = destination
    this.passengers = []


}


Bus.prototype.drive = function(distanceTraveled){
    this.distance += distanceTraveled
}


Bus.prototype.getNumberOfPassengers = function(){
    return this.passengers.length
}

Bus.prototype.pickUpPassengers = function(passengerOne){
    this.passengers.push(passengerOne)
}
module.exports = Bus