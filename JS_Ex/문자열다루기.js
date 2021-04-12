function solution(s) {
    var answer = true;
    
    if(s.length===4 || s.length===6)
    {
        for(var i=0; i<s.length; i++)
        {
            /*
            isNaN: is Not a Number
            숫자가 아니라면 true
            */
            if(isNaN(s[i]))
            {
                console.log(s[i]);
                answer = false;
            }      
        }
    }else
    {
        answer = false;
    }
    return answer;
}

s = "-2343";
console.log(solution(s));