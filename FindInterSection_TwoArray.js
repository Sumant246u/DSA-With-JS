// Approach 1 filter + includes

let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5,6,7];

let result = arr1.filter(item=>arr2.includes(item));

console.log(result);

// Approach 2 Set(Optimized)

function InterSection (ar1,ar2){
    let set2 = new Set(ar2);

    return ar1.filter(num=>set2.has(num));
}

console.log(InterSection([1,2,3,4,5,6], [3,4,5,6,7,8]));



