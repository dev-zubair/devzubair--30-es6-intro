const numbers = [10, 20, 30, 50, 60, 80];
// console.log(numbers);
// console.log(...numbers);

//Find the big number
const max = Math.max(10, 50, 1001);
// const maxInArray = Math.max(numbers);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

//Find the Small number
const min = Math.min(10, 50, 1001);
// console.log(min);

// Milti dimention array 
const numbers2 = [...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);