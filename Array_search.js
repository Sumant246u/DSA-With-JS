 let data=[10,20,60,70,40,70]
        let srchitem=70
        let count=0
        let index=[]

        for (let i = 0; i < data.length; i++) {
            if (data[i]===srchitem) {
                count++
                index.push(i)
            }
            
        }
        console.log(count);
        console.log(index);