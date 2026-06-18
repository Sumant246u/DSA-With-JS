

// Approach 1
let arr = [10,5,20,8,30,2]

let largest = arr[0];
let smallest = arr[0];

for(let i=1; i<arr.length; i++){
    if (arr[i] > largest) {
        largest = arr[i];
    }

    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log('Largest:', largest);
console.log('Smallest:', smallest);

