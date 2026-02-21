// Given a sorted array, check if any two numbers sum to target.

// function hashmaps(arr, target){
//     let left =0;
//     let right=arr.length-1;

//     while(left < right){
//         let sum = arr[left] + arr[right]

//         if(sum === target){
//             return true;
//         }else if(sum < target){
//             left ++
//         }else{
//             right--
//         }
//     }
//     return false;
// }
// console.log(hashmaps([1,2,3,4,5,6],7))


// Approach-2

let arr=[1,3,4,5,6,7,8,9,10]
target = 10

function hashmap(arr, target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1;j<arr.length;i++){
            if(arr[i] + arr[j] === target){
                return true
            }
        }
    }
    return false
}
console.log(hashmap(arr,target))