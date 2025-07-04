function FindMissingNum(arr){
    const n=arr.length+1;
    const total=(n*(n+1))/2
    const sum=arr.reduce((acc,curr)=>acc+curr,0);
    return total-sum
}
console.log(FindMissingNum([1,2,3,4,6]));


// Find all missing  number
function FindMissingNum(arr){
    const missing=[];

    const min=Math.min(...arr);
    const max=Math.max(...arr);

    for (let i = min; i <=max; i++) {
       if (!arr.includes(i)) {
        missing.push(i)
       }
        
    }
    return missing
}
console.log(FindMissingNum([1,5,8,10]));
