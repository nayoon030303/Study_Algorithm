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