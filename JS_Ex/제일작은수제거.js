function solution(arr) {
    var answer = [];
    var min = Math.min(...arr);
    answer = arr.filter((content)=>content!==min);

    if(answer.length===0)
       answer = [-1];
        
    return answer;
   
    
}