function firstNonRepeatingChar(str){
    let count ={}

    // count frequency
    for (let char of str) {
        count[char] = (count[char] || 0) +1;
        
    }

    // find first non-repeat char
    for(let char of str){
        if(count[char] === 1){
            return char
        }
    }
    return null;
}
console.log(firstNonRepeatingChar('aabbcdde'));
