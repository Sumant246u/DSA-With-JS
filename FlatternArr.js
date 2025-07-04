const arr = [1, [2, [3]]];
const flatArr=arr.flat(2)
console.log(flatArr);


// using Recursion
function flatternArr(arr){
    let result=[];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result=result.concat(flatternArr(arr[i]))
        }else{
            result.push(arr[i])
        }
        
    }
    return result
}
console.log(flatternArr([1,[2,[3,[4]]]]));
