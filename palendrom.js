function isPalendrome(str) {
    const reverse=str.split("").reverse().join("")
    return reverse == str

}
console.log(isPalendrome('mom'));
console.log(isPalendrome('madam'));
console.log(isPalendrome('Raja'));


