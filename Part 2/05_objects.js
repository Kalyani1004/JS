//de-structring
const course = {
    coursename : "Cpp",
    price : 1000,
    courseInstructor : "Kalyani"}

// course.courseInstructor

const {courseInstructor : instructor} = course

console.log(instructor);

const {name : n} = {name : "saloni"};
console.log(n);

// {
//     "name" : "atharv",
//     "coursename" : "Cppp",
//     "price" : 1000,
// }

  