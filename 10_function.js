//Example: 
function calculateTriangleSquare(a, h){
    var square = a * h / 2;
    return square;
}

var re1 = calculateTriangleSquare(10,5);
console.log("Square: " + re1);


//Example
function calculateCircleSquare(r){
    return r * 2 * 3.14;
}

console.log("Circle square: " + calculateCircleSquare(10));