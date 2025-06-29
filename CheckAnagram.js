function isAnagram(str1,str2) {
    str1=str1.replace(/\s/g,''). toLowerCase();
    str2=str2.replace(/\s/g,''). toLowerCase();

    if (str1.length !== str2.length) {
        return false
    }

    sortStr1=str1.split("").sort().join("");
    sortStr2=str2.split("").sort().join("");

    return sortStr1 === sortStr2
}

console.log(isAnagram('silent','listen'));
console.log(isAnagram('hello','world'));
console.log(isAnagram('Debit Card','bad Credit'));


