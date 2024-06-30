function myName(){
    console.log("K");
    console.log("A");
    console.log("L");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("I");
}

// function addTwonumb(num1, num2){
//     console.log(num1 + num2);
// }

// const result = addTwonumb(2 , 7)
// console.log(result); //it will give undefined

function addTwonumb(num1, num2){
   let result = num1 + num2;
   return result
//    or another method 
//  return num1 + num2
}
const result = addTwonumb(2 , 8)
 console.log(result);

// (2, "3") -> 23 considers it as string because no datatype is there

function loginuser(username = "Default"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} logged in `
}

console.log(loginuser())
// if nothing is passed it will give undefined 
// eg. console.log(loginuser())