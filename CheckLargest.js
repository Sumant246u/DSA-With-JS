// Check largest num in a Array

function largest(arr) {
    let max=arr[0]
    for (let i = 1; i<arr.length; i++) {
        if (arr[i]>max) {
            max=arr[i]
        }
        
    }
    return max
}
console.log(largest([10,20,30.4,50,90]));


// Using predefined function
const arr=[1,2,3,4,5,67]
const max=Math.max(...arr)
console.log(max);
