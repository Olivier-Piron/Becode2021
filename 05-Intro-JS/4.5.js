let xA = -2;
let yA = 2;
let xB = 2;
let yB = -2;

function calcDistance(xA, yA, xB, yB) {
    let dX = xA - xB;
    let dY = yA - yB;

    let distance = Math.sqrt((Math.pow(dX,2))+(Math.pow(dY,2)));
    return distance;
}

console.log("distance = " + calcDistance(xA, yA, xB, yB))
