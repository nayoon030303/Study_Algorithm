/**
 * my code
 * 정답은 나오나 시간이 오래걸림
 * 
 */

function solution(n, t, m, p) {
    var answer = [];
    var num = 0;
    var count = 0;
    
    //answer이 미리 구할 숫자의 갯수 t보다 작을 때 실행
    while(answer.length<t){
        var temp = num.toString(n); //num을 n진수로 변환
        var i = 0;
        while(i<temp.length){ //temp의 길이 만큼
            if(answer.length>=t)break;
            if(count%m===p-1){
                answer.push(temp.charAt(i));
            }
            i++;
            count++;
        }
        num++;    
    }
    return answer.join('').toUpperCase();
  
}

/**
 * other code
 * 다른 사람의 풀이를 봤다. 
 * 시간적 효율이 더 좋았다.
 */

 function solution(n, t, m, p) {
     
    //n진수로 변환한 숫들이 나열되어있을 때 튜브가 말해야하는 숫자의 index의 값들을 가지고있다. 
    var tubeT = Array.apply(null,Array(t)).map((a,i)=>i*m+p-1);
    var line = '';
    
    //최소한으로 나열되어야하는 숫자들
    var max = m*t + p;
    
    
    for (var i =0;line.length <= max; i++) {
        line += i.toString(n);
    }   
   
    return tubeT.map(a=>line[a]).join('').toUpperCase();
}