/*

*/
var x = 5;
var result = 1 + ++x;
console.log(result);

var a = 5;
var re1 = a++ + ++a;
console.log(re1);                       //12

var b = 5;
re1 = b++ + ++b - --b + b--;
//5 + ++b - --b + b--;  6
//5 + 7 - --b + b--;    7
//5 + 7 - 6 + b--;      6
//5 + 7 - 6 + 6;        5

console.log(re1);

a = 5;
b = 10;
re1 = a++ * b-- + --a * ++b;
//5 * 10 + --a * ++b; //6,9
//5 * 10 + 5 * 10;      //
console.log(re1);


