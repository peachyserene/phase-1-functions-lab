const hqAddress = 42
function distanceFromHqInBlocks(customerAddress) {
    let numOfBlocks = hqAddress - customerAddress;
    return Math.abs(numOfBlocks);
}

function distanceFromHqInFeet(customerAddress) {
    let numOfFeet = distanceFromHqInBlocks(customerAddress) * 264;
    return numOfFeet;
}

function distanceTravelledInFeet(start, destination) {
    let tripInBlocks = start - destination;
    let tripInFeet = tripInBlocks * 264;
    return Math.abs(tripInFeet);
}

function calculatesFarePrice(start, destination) {
   let feetTraveled = distanceTravelledInFeet(start, destination)
   let cost;
   switch (true) {
        case feetTraveled <= 400:
           cost = 0;
           break;
        case feetTraveled <= 2000:
            cost = (feetTraveled-400)*.02;
            break;
        case feetTraveled <= 2500:
            cost = 25;
            break;
       default:
           cost = 'cannot travel that far'
           break;
   }
   return cost;
}
