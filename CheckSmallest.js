function smallest(arr) {
    let min=arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]<min) {
          min= arr[i]  
        }
        
    }
    return min
}

console.log(smallest([10,2,40,50,7]));

// Using predifined function
const arr=[100,200,300,40,500]
const min=Math.min(...arr)
console.log(min);

