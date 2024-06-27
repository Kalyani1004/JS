const b = ["Jetha", "Daya", "Babita"]
const shin = ["Shinchan", "Mitsi","Harry"]

// b.push(shin) //gives array in array
// console.log(b); 
// //array can take any datatype

// b.concat(shin) //this also gives array in array 
// console.log(b); 

//use new variable for merging two arrays
// const fav = b.concat(shin)
// console.log(fav); 

//spread operator [...arrayname1, ...arrayname2, ...arrayname3, etc...]
const newfav = [...b, ...shin]
// console.log(newfav);

const another = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another = another.flat(Infinity)
//flat :  create a new array with all sub-array elements concatenated into
// it recursively up to the specified depth
// console.log(real_another);

console.log(Array.isArray("Kalyani"))
console.log(Array.from("Kalyani"))
console.log(Array.from({name:"Kalyani"})) //interesting 

//to convert variable in array 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))