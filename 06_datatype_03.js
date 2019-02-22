var evenNumbers = [2,4,6];

arrLength = evenNumbers.length;
console.log("Array length: " + arrLength);

var dog1 = {
    type: 'Cho ta'
};

var dog2 = {
    type: 'lap xuong'
};

var dog3 = {
    name: 'dog3',
    type: 'husky'
}

var dog4 = {
    name: 'dog4',
    type: 'shiba'
}



var arrOfDogs = [dog1, dog2, dog3];

//Assign dog4 to dog1
arrOfDogs[0] = dog4;

console.log(arrOfDogs);
console.log(arrOfDogs[2]);
console.log(arrOfDogs[2].name);
console.log(arrOfDogs[2]['name']);

console.log(arrOfDogs[0]);
console.log(arrOfDogs[0].name);
console.log(arrOfDogs[0]['name']);

//List: contact numbers
var contacts = 
[
    {name: "A", phone: 12355},
    {name: "B", phone: 54323}
];

