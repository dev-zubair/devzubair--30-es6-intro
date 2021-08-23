// 2ta songkha jog korbo Arrow function diye - variable er moto declare korbo. ekhane return likhte hobe na. Auto return korbe. eke Implicit return bole
//A function is returned values without using the return keyword, it's called an implicit return.
const add = (num1, num2) => num1 + num2;
const sum = add(20, 30);
// console.log(sum);

// Multiply - an implicit return.
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplyResult = multiply(3, 5, 10);
// console.log(multiplyResult);

//Ekti songkhake 5 gun korte chaile - an implicit return.
const fiveTimes = (num) => num * 5;
const fiveTimesResult = fiveTimes(17);
// console.log(fiveTimesResult);

//Ekti songkhake 10 gun korte chaile - an implicit return.
const tenTimes = num => num * 10; // First Bracket na diyeo cholbe
const tenTimesResult = tenTimes(17);
// console.log(tenTimesResult);

//Dhori kono parameter nei - an implicit return.
const getName = () => 'Zubair Ahmed';
const myName = getName();
// console.log(myName);

//Multiline - mane 2 ta parameter ke jog, gun, biyog korbo, sekhatre ek line e possible na. tai multiline use korte hobe
const doMath = (a, b) => {
    const sum = a + b;
    const diff = a - b;
    const multiply = sum * diff;
    const totalMultiply = multiply * 5;
    return totalMultiply;
}
const finalResult = doMath(10, 5);
console.log(finalResult);
