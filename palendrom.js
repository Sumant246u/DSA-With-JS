function isPalendrome(str) {
    const reverse = str.split("").reverse().join("")
    return reverse == str

}
console.log(isPalendrome('mom'));
console.log(isPalendrome('madam'));
console.log(isPalendrome('Raja'));


// Using Two pointers

function isPalendrom(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true
}
console.log(isPalendrom("madam"))
console.log(isPalendrom("hello"))
