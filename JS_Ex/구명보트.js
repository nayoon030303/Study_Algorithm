/**
 * 통과는 하나 효율성에서 탈락한다.
 * 
 */

function solution(people, limit) {
    var answer = 0;
    
    people.sort((a,b)=>b-a);
    for(let i=0; i<people.length; i++){
        if(people[i]==='N')continue;
        let x = limit-people[i];
        
        for(let j=i+1; j<people.length; j++){
            if(people[j]<=x){
                people[j]='N';
                break;
            }
        }
        answer+=1;
    }
    
    return answer;
}

/**
 * people을 정렬
 * 가장 큰 수와 가장 작은수를 합한 값이 limit을 넘지 않으면 가장 작은 수를 pop
 */
 function solution(people, limit) {
    var answer = 0;
    
    people.sort((a,b)=>b-a);
    for(let i=0; i<people.length; i++){
        if(people[i]+people[people.length-1]<=limit){
            people.pop();
        }
        answer+=1;
    }
    
    return answer;
}