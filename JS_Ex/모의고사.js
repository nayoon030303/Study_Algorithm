function solution(answers) {
    var answer = [];
    
    var s1 = [1,2,3,4,5];
    var s2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var s3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var result = [0,0,0];
    for(var i =0; i<answers.length; i++)
    {
        //console.log(answers[i]);
        if(answers[i] === s1[i%(s1.length)])
        {
            result[0]+=1;
        }
        if(answers[i] === s2[i%(s2.length)])
        {
            result[1]+=1;
        }
        if(answers[i] === s3[i%(s3.length)])
        {
            result[2]+=1;
        }
    }


    var max = Math.max.apply(null,result);
  
   for(var i=0; i<result.length; i++)
   {
       if(max === result[i])
       {
           answer.push(i+1);
       }
   }
    
    /*answer = result.filter((context)=>context===max)
    .map((content,index)=>index+1);
    console.log(answer);*/


    return answer;
}

answers = [2, 1, 2, 3, 2, 4, 2, 5];
console.log(solution(answers));