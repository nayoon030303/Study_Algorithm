/*
my code
*/
function solution(s) {
    
    s = s.split(' ').map((v)=>Number(v)).sort((a,b)=>a-b);
    var answer = s[0]+" "+s[s.length-1];
    return answer;
}


/*
other code
*/
function solution(s) {
    const arr = s.split(' ');


    //... 전개 연산자
    //Math.min/max(문자열도 가능)
    return Math.min(...arr)+' '+Math.max(...arr);
}