// Count Vowel in a string
function VowelCount(str) {
    let vowel='aeiouAEIOU';
    let count=0;
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            count++
        }
        
    }
    return count;
}

console.log(VowelCount('HelloWorld'));


// If U want Which Position
function CountVowels(str) {
    let vowel='aeiouAEIOU';
    count=0;
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            console.log(`vowel ${str[i]}  in position ${i}`);
            count++
        }
        
    }
}
console.log(CountVowels('SumantSahoo'));
