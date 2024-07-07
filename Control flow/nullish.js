// nullish coalescing operator (??)
// ?? is used to provide a default value when a variable is null or undefined

let val1;
// val1 = 5 ?? 10; //5 gives output which is first value always
// val1 = null ?? 10 // 10 
val1 = undefined ?? 15 //15


console.log(val1);


//Terniary operator 
// ? : is used to provide a default value when a variable is null or undefined

// condition ? true : false 

const iceCoffee = 100
iceCoffee >=80 ? console.log("greater than 80") :  console.log("less than 80")