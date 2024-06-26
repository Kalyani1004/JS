let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber); //gives NaN not a number because it's a 33abc

// "33" => 33
//"33abc" => NaN
// true => 1; false =0

let isLoggedIn = 1
let isBoolean = Boolean(isLoggedIn)
console.log(isBoolean)

//"" => false
//"kalyani" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);

let v =3 
let negativeV = -v
console.log(negativeV);

//console.log(2**3) 2 raised to power 3
console.log("2"+"2");
console.log("2"+2);
console.log(2+"2");
console.log("2"+2+2);
console.log(2+2+"2");

str1 ="Kalyani"
str2= " Bharsat"
str3 = str1 + str2
console.log(str3);

let gC = 2
console.log(gC);
gC1= gC++;  //postfix increments value but returns the value before incrementing.
console.log(gC1);

gc2 = 1
gC4= ++gc2; //prefix returns the value after incrementing.
console.log(gC4);

