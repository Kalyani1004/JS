// this - says about the current context 
// this is a keyword

const user ={
    name: 'John',
    price : 1000,

    welcome: function(){
        console.log(`${this.name}, welcome to website `)
        console.log(this); // this talks about the current context

    }
}

// user.welcome()
// user.name = "kalyani"
// user.welcome()

// console.log(this) it will give empty parenthesis because it is running in node environment
// because there is no context in global, it is refering to empty object 

// it will give different output for diff objects 

// function one(){
//     console.log(this)
// }

// one()

const coffee =  () => {  // arrow function
    let user = "Kalya"
    console.log(this.user)
}

// coffee()

() => {} //syntax for arrow function

// method 1 for arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2 //explicit return
// }
// console.log(addTwo(2,3))

// method 2 for arrow function
// const addTwo = (num1, num2 ) => num1 + num2 //implicit return
// console.log(addTwo(2,3))

// if you want to return object 
const addTwo = (num1, num2 ) => ({user : "Kal"})
console.log(addTwo(2,3))

// difference between normal function and arrow function
// 1. normal function has its own this - this refers to object here 
//  arrow function does not have its own this - this refers to surrounding context here
// 2. normal function has its own arguments, arrow function does not have its own arguments
