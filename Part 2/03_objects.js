//singleton 
//Object.create // it makes singleton

//object literals

const mySym = Symbol("key1")

const JsUSer = {
    name : "Kalyani",
    "full name" : "Kalyani bharsat",
    [mySym] :"mykey1",
    age : 21, 
    location : "Virar",
    email : "kalyani@google.com",
    isLoggedIn : false, 
    lastLogin : ["Monday", "Thursday"]
}

console.log(JsUSer.email);
console.log(JsUSer["email"])
console.log(JsUSer["full name"])
console.log(JsUSer[mySym])

JsUSer.email = "kalyani@microsoft.com"
console.log(JsUSer.email);
// Object.freeze(JsUSer) //it will not allow to change in object
JsUSer.email = "kalyani@oracle.com"
console.log(JsUSer);

//function
JsUSer.greeting =function(){
    console.log("Hello kalyani");
}
console.log(JsUSer.greeting());

JsUSer.greetingtwo =function(){
    console.log(`Hello kalyani, ${this.name}`);
}
console.log(JsUSer.greetingtwo());