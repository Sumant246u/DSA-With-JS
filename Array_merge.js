 let data=[10,20,30,40]
        let data2=[100,200,300,400]
        // let data3=[]

        // for (let index = 0; index < data.length; index++) {
        //     data3[index]=data[index]
            
        // }

        // for (let index = 0; index < data2.length; index++) {
           
        //     data3[data.length+index]=data2[index]
        // }

        // console.log(data3);

        //Using Predefined function
        let data3=[...data,...data2]
        console.log(data3);