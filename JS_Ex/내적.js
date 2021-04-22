function solution(a, b) {
    var answer = 0;
    for(var i=0; i<a.length; i++){
        answer+=a[i]*b[i];
    }
    return answer;
}

function solution1(a, b) {
    var answer = 0;
    answer=a.reduce((sum,cur,idx)=>sum+(cur*b[idx]),0); //0으로 설정해줘야한다.
    return answer;
}

var a= [1,2,3,4];
var b = [-3,-1,0,2];
console.log(solution1(a,b));