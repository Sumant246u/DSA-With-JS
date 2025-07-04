// Capitalize First Letter Of Each Word

function CapitalizeWord(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
}
console.log(CapitalizeWord('welcome to javascript'));


// Using for loop

function capitalizeWord(str) {
    let words=str.split('')
    let result=''

    for (let i = 0; i < words.length; i++) {
        const word=words[i]
        if (word.length>0) {
            result+=word[0].toUpperCase()+word.slice(1)+"";
        }
        
    }
    return result.trim();
}

console.log(capitalizeWord('sumant sahoo'));

