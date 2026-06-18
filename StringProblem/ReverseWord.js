let str = 'I love javascript'

let result = str.split(' ').reverse().join(" ");

console.log(result);


// Reverse Each word individually

const string = 'I love Sumant'
const output = string.split(' ').map(word=>word.split("").reverse().join("")).join(" ");

console.log(output);
