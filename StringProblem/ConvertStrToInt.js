function StringToInt (str){
    let result =0;

    for(let char of str){
        result = result * 10 + (char.charCodeAt(0) - 48);
    }

    return result;
}

console.log(StringToInt('123456'));
