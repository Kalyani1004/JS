let D = new Date()
// console.log(D.toString());
// console.log(D.toDateString());
// console.log(D.toLocaleString());
// console.log(typeof D); //Date is object 

//let myDate = new Date(2023, 0 , 23)
//let myDate = new Date(2023, 0 , 23, 15, 3)
//month is started from 0 ; 0 - jan

let myDate = new Date("01-23-2023")
//mm-dd-yy format
// console.log(myDate.toLocaleString());
//locale string gives time also 

//timestamp
let t = Date.now()
// console.log(t); //timestamp is in milliseconds
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDate()); //getmonth getyear getday
 
newDate.toLocaleDateString('default', { 
    weekday: "long",
    timeZone: "America/New_York"
})
//monday, mon, and all in this
console.log(newDate);
