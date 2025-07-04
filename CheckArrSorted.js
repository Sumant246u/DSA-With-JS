function isSorted(arr){
    for (let i = 0; i < arr.length-1; i++) {
       if (arr[i]>arr[i+1]) {
        return false
       }
         
    }
    return true
}
console.log(isSorted([5,4,3,2,1]));
console.log(isSorted([3,5,2]));

