// Immediately invoked function expressions (IIFE)
// to invoke or express function immediately
(function coffe(){
    //named iife
    console.log("I am a coffee");
})() ;
// global scope ke pollutionse problem hoti hai
// to avoid this problem we use IIFE
// IIFE is a function that is invoked immediately after it is defined
// what is global scope
// global scope is the scope that is outside of any function or block
// what is local scope
// local scope is the scope that is inside of a function or block


( (name) => {
    // unnamed iife
    console.log(`DB connected ${name}`);
})("kalyani")