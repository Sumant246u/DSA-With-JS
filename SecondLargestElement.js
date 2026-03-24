function SecondLargest(arr) {

    let largest = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }
    return second;
}
console.log(SecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9]));