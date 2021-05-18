function solution(left, right) {
    var answer = 0;
    for(let i = left; i<=right; i++){
        let sum = 1;
        for(let j =1; j<=i/2; j++){
            if(i%j==0){
                sum+=1;
            }
        }
        if(sum%2==0){
            answer+=i;
        }else{
            answer-=i;
        }
        console.log(sum);
    }
    return answer;
}

/**
 * other code
 */

 function solution(left, right) {
     var answer = 0;
     for (let i = left; i <= right; i++) {
         if (Number.isInteger(Math.sqrt(i))) {
             answer -= i;
         } else {
             answer += i;
         }
     }
     return answer;
 }
 