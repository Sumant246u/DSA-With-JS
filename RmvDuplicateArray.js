const arr= [1,2,3,4,5,6,1,2,3,5,6,9,5,4]
const unique=[]
for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i])
    }
    
}
console.log(unique);
