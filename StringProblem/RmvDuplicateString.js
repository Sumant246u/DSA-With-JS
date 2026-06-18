// Method 1
// let str = "programming"
// let result = [...new Set(str)].join("");
// console.log(result);

// Method 2

function RemvDeplicateStr(str){
    return [...new Set(str)].join("");
}

console.log(RemvDeplicateStr("programming"));

