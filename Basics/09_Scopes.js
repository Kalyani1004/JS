// {} - scope 
// let - block scope
// var - function scope
// const - block scope

// nested scope 
function one(){
    const username = "Kalyani"
    function two(){
        const password = "1234"
        console.log(username)
    }
    // console.log(password); it will give error because its scope ending on upper line 
    // it's block code is above it will be not accessible
    // two() it will give kalyani because function two contains the console log for username
}
// one() it will not give anything because nothing is there to print 

if(true){
    const username = "kalya"
    if(username == "kalya"){
        const website = "yt"
        // console.log(website + " " +username)
    }
    // console.log(website)
}
// console.log(username)


///++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num +1 
}

// addTwo(5) it will give error it depends on the method how you declare the function
// it is declared before the in
const addTwo = function(num){ // known as hoisting 
    return num +2
}

addTwo(5)