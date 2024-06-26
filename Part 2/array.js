// const a = [0,1,2,3,4,5, true, "kalyani"]
//elements can be different types
// const a = [1,2,3,4,5]

//javascript arrays are resizeable 
// console.log(a[0]);

//it creates shallow copies : copy whose properties share the 
// same references
//it means original array mhdey pn changes honar jas heap ch hota 

//deep copies: do not share same reference 


const names = ["Kal", "Ath"]
const myarr = new Array(3,45,6,78)
// console.log(myarr);

//methods
//push: adds element at the end of the array
myarr.push(9)
// console.log(myarr);

//pop: removes element from the end of the array
myarr.pop()
// console.log(myarr);

//it will add the value in front side 
myarr.unshift(9);
// console.log(myarr);

//it will remove first element 
myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(3))
// console.log(myarr.indexOf(3))
//if any value which does not exist it will give -1

//join : it converts array to string
const newA  = myarr.join()
// console.log(myarr);
// console.log(newA);

//slice
console.log("A", myarr)
const n1 = myarr.slice(1,3)
console.log(n1);
console.log("B", myarr);

const n2 = myarr.splice(1,3)
console.log(n2);
console.log("C", myarr);

//difference between splice and slice
//splice: it removes the element from the array and
// returns the removed element
//manipulates the original array 

//slice: it returns the element from the array
// but does not remove it from the array