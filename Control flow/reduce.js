const myNums = [1,2,3]
// const total = myNums.reduce(function(acc, currentvalue){
//     console.log(`accumuluator ${acc} and current value ${currentvalue}`);
//     return acc + currentvalue
// },0) //0 : value for accumulator(acc) for start and you can give any value

// arrow function
const total = myNums.reduce((acc, currentvalue) => acc + currentvalue, 0)
// console.log(total);

const shopping_cart =[
    {
        item : 'apple',
        price : 10
    },
    {
        item : 'banana',
        price : 20
    },
    {
        item : 'orange',
        price : 30
    }
]

const total_cart = shopping_cart.reduce((acc, item) => acc + item.price , 0)
// console.log(total_cart);


const students = [
    {
        name : 'kalyani',
        course : 10
    },
    {
        name : 'shrutika',
        course : 20
    },
    {
        name : 'sami',
        course : 20
    },

]

const info = students.reduce((acc, name) => acc+ name.course,0 )
console.log(info);