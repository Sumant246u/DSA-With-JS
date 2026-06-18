function StringRotation (str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    return (str1 + str2).includes(str2);
}

console.log(StringRotation('abcd', 'cdab'));
