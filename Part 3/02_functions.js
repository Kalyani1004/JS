function calculateCartPrice(...num1){ 
    // (...num1) => rest operator 
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

// here the val1 = 200, val2 = 400, and the rest will go in ...num1 which is an array 
// so this is how the rest operator works
function calculateCartPrice(val1, val2, ...num1){ 
    // (...num1) => rest operator 
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    name : "Kalyani",
    price : 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    name : "SAloni",
    price : 1000
})

const myArray = [200, 5222, 444]

function returnSecondval(getArray){
    return getArray[1]
}

// console.log(returnSecondval(myArray))
console.log(returnSecondval([200,477,822]));