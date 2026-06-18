let str = 'programming'
let count ={};

for(let char of str){
    count[char] = (count[char] || 0) +1
}
console.log(count);


// Method 2
function CountOccurence (str){
    let count ={};

    for( let char of str){
        count[char] = (count[char] || 0) +1;
    }

    return count;
}

console.log(CountOccurence('SumantSahoo'));
