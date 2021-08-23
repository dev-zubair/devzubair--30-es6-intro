// variable declare
var deposit = 400;
//Condition
if (deposit > 500) {
    //deposit 500 er cheye boro kina
}
if (deposit < 500) {
    //deposit 500 er kom kina
}
if (deposit == 500) {
    //deposit 500 er soman kina
}
if (deposit != 500) {
    //deposit 500 er soman na. 499 hote pare, 400 hote pare, 1050 hote pare
}
if (deposit >= 500) {
    //deposit 500 er boro othoba soman
}
if (deposit <= 500) {
    //deposit 500 er choto othoba soman
}

//Array - namer array hote pare, songkhar array hote pare
const numbers = [45, 10, 20, 46, 360];
const numbersCount = numbers.length;            //array er moddhe koyta upadan ba elements ache ta amar jante pari
const numberPosition = numbers.indexOf(360);    // Array er moddhe upadan ba elements gulo koto number position e ache. array er index sobsomoy 0 theke suru hoy
numbers.push(500);      //array er moddhe new element add korte chaile
numbers.pop();          //array er moddhe kono element delete korte chaile. ekdom seserta delete hobe
numbers[2] = 100;       //array er moddhe specific element er man change korte chaile
if (numbers.indexOf(222) != -1) {
    //kono ekta jinis array er moddhe ache kina tao check kora jay
    // eta -1 na. mane holo etar moddhe ase. jodi etar moddhe thake tahole eta index 0 ba tar cheye basi hobe. jodi na thake tahole hobe -1
}
if (numbers.includes(222)) {
    // er bhabe o check kora jay. se khettre etar result TRUE or FALSE dekhabe
}
// console.log(numbers);

//Loop - while loop and for loop

for (const number of numbers) {
    //kono ekta array er upadan gulor moddhe amra loop chalate chaile. eta hole for of
}

//Function
function fullName(first, second) {
    const name = first + ' ' + second;
    return name;
}
const person = fullName('Zubair', 'Ahmed');
console.log(person);

//Object

const Zubair = { eye: 'black', hair: 'black', complexion: 'black', height: '5.4 inch' }