let doesBrickFix =(inputArr)=>{

    let count =0
    let finalResult = false

 outerLoop: for(let i=0 ; i<inputArr.length ; i++){
    innerLoop: for(let j=i ; j<inputArr.length ; j++){
            
            if(inputArr[i]==inputArr[j]){
                count +=1
                if(count == 3){
                   finalResult =true
                   break outerLoop
                }
            }
            else{
                    count =0
                    break innerLoop
                }
                
            }
            
        } 
         console.log(finalResult)
    }

doesBrickFix([1,1,2,2])