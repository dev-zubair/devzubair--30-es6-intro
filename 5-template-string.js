//Quotation
const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`; // Alternatively known as acute, backtick, left quote, or an open quote, the back quote or backquote

const multiLine = 'This is my first line. \n' +     // \n mane line break
    'this is my second line.\n' +
    'third line text here\n' +
    'fourth line text here';
// console.log(multiLine);

const multiLineNew = `this is is multi line
this is second line
this is third line
fourth line
`;
// console.log(multiLineNew);

const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 20;
const old = '<h3 class="friend-name">Friend-10</h3>';
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const old2 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;
// console.log(new1);

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld1 = first + ' ' + last;
const fullOld2 = 'This person name is ' + first + ' ' + last;
const fullNew1 = `${first} ${last}`;
const fullNew2 = `This person name is: ${first} ${last}`;
const fullNew3 = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}`;
const fullNew4 = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka.`;

console.log(fullNew1);