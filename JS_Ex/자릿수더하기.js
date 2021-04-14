function solution(n)
{
    var answer = 0;
    n = String(n);
    for(var i=0; i<n.length; i++){
        answer+=Number(n[i]);
        
    }
    
    answer = String(n).split("").reduce((sum,cur)=>sum+Number(cur),0);
    return answer;
}

n = 492;
console.log(solution(n));
