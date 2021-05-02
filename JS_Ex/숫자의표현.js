/**
 * my code
 * 하나씩 다 더해주면서 n이라 비교하기
 */

function solution(n) {
    
    let temp = 0;
    let answer = 0;
    for(let i=1; i<=n; i++){
        temp = 0;
        for(let j=i; j<=n; j++){
            temp+=j;
            if(temp>n)break;
            if(temp===n){
                //console.log(i);
                answer+=1;
                break; 
            }
            
        }
    } 
    return answer;
}