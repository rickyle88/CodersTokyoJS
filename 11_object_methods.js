var myDog = {
    weight : 5,
    name : 'dog1',
    age : 1,
    bark : function(){
        console.log("Bark 1 2 3 , My name is ", this.name);
    },
    eat : function(bone){
        this.weight = this.weight + bone.weight;
        //return this;
    }
};

var bone = { weight : 0.5};

//get weight;
console.log("Weight before: " + myDog.weight);
myDog.eat(bone);
console.log("Weight after: " + myDog.weight);

myDog.bark();
console.log(myDog['age']);
