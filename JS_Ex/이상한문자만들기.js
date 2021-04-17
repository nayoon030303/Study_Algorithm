function solution(s) {
    var answer = '';
    answer = s.split(' ');
    for(var i=0; i<answer.length; i++){
        answer[i] = answer[i].split('').map((c,v)=>{
           if(v%2===0) return c.toUpperCase();
            else return c.toLowerCase();
        }).join('');
        console.log(answer[i]);
    }
    
    return answer.join(' ');
}