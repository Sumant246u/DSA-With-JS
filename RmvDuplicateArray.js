const arr= [1,2,3,4,5,6,1,2,3,5,6,9,5,4]
const unique=[]
for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i])
    }
    
}
console.log(unique);

// Using forEach()
// let numbers = [1, 2, 2, 3, 4, 4, 5];
// let unique = [];
// numbers.forEach((num) => {
//   if (!unique.includes(num)) {
//     unique.push(num);
//   }
// });
// console.log(unique); // [1, 2, 3, 4, 5]



// Using reduce()
// let numbers = [1, 2, 2, 3, 4, 4, 5];
// let unique = numbers.reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
console.log(unique); // [1, 2, 3, 4, 5]
