/**
 * 같은 점수가 여러게라면 오류가 난다.
 * 
 * 
 */
function solution(land){
    
    var answer = [];
    
    //console.log(Math.max.apply(null,land[0])); 
  
    var sum = 0;
    var idx = 3;
    
    
    for(var l = 0; l<4; l++){
        var ex = [land[0][l]]
        idx = l;
        for(var i=1; i<land.length; i++){
            var temp;
            var max = -1;
            for(var j=0; j<land[i].length; j++){
                if(idx===j)continue;
                if(max<land[i][j]){
                    max = land[i][j];
                    temp = j;
                }
            }
            ex.push(max);
            idx = temp;
        }
        answer.push(ex.reduce((acc,cur)=>acc+cur));
    }
  
    console.log(answer);
    return Math.max(...answer);
}

var s= [[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]];

console.log(solution(s));

/*
다른 사람의 알고리즘 참고
*/

function solution(land){
    
    var answer = 0;
    
    var n = land.length; //행의 개수 
    
    for(var i=0; i<n-1; i++){
        
        land[i+1][0] += Math.max(land[i][1],land[i][2],land[i][3]);
        //i번쨰 행에 0번쨰 열에는 i번째 행에 1,2,3 열 중 최댓값을 더해준다.  
        land[i+1][1] += Math.max(land[i][0],land[i][2],land[i][3]);
        land[i+1][2] += Math.max(land[i][1],land[i][0],land[i][3]);
        land[i+1][3] += Math.max(land[i][1],land[i][2],land[i][0]);
    }
    //console.log(land);
    answer = Math.max(...land[n-1]);
    return answer;
}