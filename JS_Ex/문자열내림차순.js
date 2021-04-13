function solution(s) {
    var answer = '';
    var lower = [];
    var upper = [];

    for(var i=0; i<s.length; i++)
    {
        if(s[i].toLowerCase() === s[i])
        {
            lower.push(s[i]);
            console.log(s[i]);
            
        }else
        {
            upper.push(s[i]);
        }
        
    }

    lower.sort().reverse();
    upper.sort().reverse();
    answer = lower.join()+upper.join();
    console.log(answer);
    return answer.replace(/\,/g,'');
}   

var s = "Zbcdefg";
//var s = ["b", 'a', 'o'];
//s.sort();
console.log(solution(s));