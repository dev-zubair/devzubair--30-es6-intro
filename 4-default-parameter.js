function add(num1, num2 = 33) {
    // option 2
    // num2 = num2 || 0;
    // option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15, 10);     //10 er jaygate 0 dile result 15 hobe ar 10 na dile uporer 33 er sathe 15 jog hobe
// console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}

const hisName = fullName('Zubair', 'Ahmed');
// const hisName = fullName('Zubair',);
console.log(hisName);