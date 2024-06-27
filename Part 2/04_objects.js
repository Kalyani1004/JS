// const fb = new Object() singleton object

const fb = { } //non-singleton object
fb.id = "123abc"
fb.name = "Kal"
fb.isLoggedIn = false;
// console.log(fb);

const rU = {
    email:"some@gmail.com",
    fullname : {
        userFullname : {
            firstname : "Kalyani",
            lastname : "Bharsat"
        }
    }
}

//it is object in object like a chaning 
// console.log(rU.fullname.userFullname.firstname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4 : "b"}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

//values from database 
const user = [
    {
        id:1,
        email:"k@gmail.com"
    },
    {
        id:2,
        email:"v@gmail.com"
    }

]

user[1].email
console.log(fb)

console.log(Object.keys(fb))
console.log(Object.values(fb))
console.log(Object.entries(fb))

console.log(fb.hasOwnProperty('isLoggedIn')) 
//it shows that the object(fb) has that propery or not
