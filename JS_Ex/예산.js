function solution(d, budget) {
    var answer = 0;
    var i;
    /*최대한 많은 부서를 지원하기 위해 정렬 */
    d.sort((a,b)=>a-b);
    //console.log(d);
    
    for(i=0; i<d.length; i++){
        if(answer+d[i]>budget){
            break;
        }
        answer+=d[i];
    }
    //console.log(answer,i);
    return i;
}