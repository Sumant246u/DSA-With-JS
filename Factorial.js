// method 1

let num = 10
let factorial = 1

for (let i = 1; i <= num; i++) {  //If u want include 10 then you use = , if you not want include 10 then don't use =
    factorial *= i

}
console.log(factorial);

// method 2
function fact(n) {
    let result=1;
    for (let i = 2; i<n; i++) {
        result*=i
        
    }
    return result

}
console.log(fact(15));
