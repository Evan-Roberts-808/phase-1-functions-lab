// Finds distance from HQ in Blocks
function distanceFromHqInBlocks(value) {
    let distanceFromHqInBlocks = Math.abs(42 - value);
    return distanceFromHqInBlocks;
};

// Finds distance in feet
function distanceFromHqInFeet(value) {
    return  distanceFromHqInBlocks(value) * 264;
};

// Finds distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
};

// Calculates fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return  0;
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
};