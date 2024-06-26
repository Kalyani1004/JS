//data are stored on the basis of some catagorisation : primitve and non-primitive
//Primitive : always call by value
//string, number, boolean, null, undefined, symbol, bigint
//Non-primitive (reference): always call by reference
//object, array, function

//symbol is unique 
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid);

//array
const fruits = ["apple", "mango"];

//objects
let myObj = {
    name:"kalyani",
    age : 21,
}

// function 
const myFunc = function(){
    console.log("Hello World");
}

// how to find the data type of variable
console.log(typeof id);

//null type is object
console.log(typeof null);

//bigint => function
console.log(typeof BigInt);
