// import { produce } from "immer"

// const employee = {
//     name: "mukter",
//     address: {country: "Bangladesh", city: "Dhaka"}
// }


// const employee2 = {
//     ...employee, 
//     name: "Hossain",
//     address: {...employee.address, city: "Rangpur"}
// }

// employee2.address.city= "Comilla"


// const employee2 = produce(employee, )

// console.log(employee == employee2)
// console.log(employee)
// console.log(employee2)



// **** ***********  Curring/function Curry ********

// Normal 
// const add = (a,b) => a + b;

// Curried 
// const add = (a) => (b) => a + b;


// console.log(add(5,3))
// console.log(add(5)(3))



// function add(a) {
//     return function (b){
//         return function (c){
//             return a + b + c;
//         }
//     }
// }



// const totalPrice = (amount, discount) => amount -  amount * discount;
// console.log(totalPrice(100, .30))


// function curring
const totalPrice = (discount) => (amount) => amount -  amount * discount;
const withDiscount = totalPrice(0.3)
console.log(withDiscount(100))
console.log(withDiscount(400))
console.log(withDiscount(500))




