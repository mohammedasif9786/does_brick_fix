let doesBrickFix =(inputArr)=>{
    
    let finalResult = false
 for(let i=0 ; i<inputArr.length ; i++){
    if(inputArr[i] == inputArr[i+1] && inputArr[i]== inputArr[i+2]){
        finalResult= true
    }
   continue
  
 }
 console.log(finalResult)
}

doesBrickFix([3,4,5,6,7,8,9,1,1,3,4,5,6,1,2,3,4,4,4,1,1,1,2,1,1,1,2,3,3,3])

