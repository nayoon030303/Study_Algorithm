function solution(n, m) {
    var answer = [];
    var max = n;
    var min = m;
    
    /*최대공약수*/
    while(true){
        if(max%min ===0){
            break;
        }
        var temp = max%min;
        max= min;
        min = temp;
        
    }
     answer.push(min);

    /*최소공배수: 0이 아닌 두 수의 곱/두수의 최대 공약수 */
    answer.push(n*m/min);

    return answer;
}

console.log(solution(3,12));