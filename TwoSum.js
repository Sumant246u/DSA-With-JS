

function twosum (nums, target){
    let map={};

    for(let i=0; i < nums.length;i++){
        let complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
}

console.log(twosum([2,7,11,15],9));

// Approach 2

function TwoSum (num, target){
    for(let i=0; i<num.length; i++){
        for(let j=i+1; j< num.length; j++){
            if (num[i] + num[j] === target) {
                return [i,j]
            }
        }
    }
}

console.log(TwoSum([2,7,11,15],9));
