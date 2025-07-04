let number=[1,2,3,4,5]
let sum=0;
for (let i = 0; i < number.length; i++) {
    sum+=number[i]
    
}
console.log("Sum=",sum);

// using predifind function
const num=[1,2,3,4,5,6]
const sums=num.reduce((acc,curr)=>acc+curr,0);
console.log(sums);

