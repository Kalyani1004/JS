/* memories - stack and heap
stack - all primitive types uses stack memory
it gives copy of variable
heap - non primitive types uses heap 
it gives reference of original value
*/
//stack will make copy of variable it will not change the
//original value
let name = "kalyani"
let name2= name
name2 = "bharsat"
console.log(name);
console.log(name2);

//heap will change the original value also
//it takes reference and changes the original value also 
let oneName={
    name:"Kalyani",
}
let secondName ={
    name : "Saloni",
}

secondName.name ="Kalyani"

console.log(oneName);
console.log(secondName);

