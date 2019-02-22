//Object declaration
/*
var a = {
    key: value,
    key: value
};
*/
var myDog = {
    name: "A",
    weight: 5.2,
    isAlive: false
};

//get 
console.log("MyDog name: " + myDog.name);
console.log("MyDog name: " + myDog['name']);

//set
myDog.weight = 10;

//set
myDog['isAlive'] = true;

//get
console.log("My dog weight: " + myDog.weight);
console.log("My dog weight: " + myDog['weight']);

console.log(myDog);

var myBestFriend = {
    nickName: "Nick",
    age: 28,
    gender: 'male'
};

var ob = {};

