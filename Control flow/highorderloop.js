// forof
// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Char ${greet}`);
// }


// Maps - no duplicate only unique, it is not iteratable
const map = new Map()
map.set('IN', 'INDIA')
map.set('US', 'UNITED STATES')
map.set('FR', 'FRANCE')

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// it will not work on object the above forof loop


//forin loop will work for objects
const myObj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}
 for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
 }

 //in arrays forof and forin both loop can work
const programming = ["js", "cpp", "python"]
for (const key in programming) {
    // console.log(programming[key]);
}

const coding = ['js', 'cpp', 'html']
coding.forEach( function (item) { //function is callback that's why it will not have any name
    // console.log(item);
})

//arrow function
coding.forEach((item1) => {
    // console.log(item1);
})


function print(item){
    // console.log(item);
}

coding.forEach(print)

coding.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
})


//objects in array
const myCoding = [
    {
        langugae : "javascript",
        shortcut : "js"
    },
    {
        langugae : "c++",
        shortcut : "cpp"
    },
    {
        langugae : "ruby",
        shortcut : "rb"
    }
]

myCoding.forEach((item)=> {
    console.log(item.langugae)
})