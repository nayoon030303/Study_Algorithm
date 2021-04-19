/*
* toString(바꾸고싶은 진법);
* parseInt(string, current진법);
*/

function solution(n) {
    var answer = 0;
    answer = parseInt((n.toString(3).split('').reverse().join('')),3);
    //threeN=parseInt(threeN,3);
    //console.log(threeN);
    
    return answer;
}

/*
* 내장함수 사용X
*/
function solution1(n){
    var answer = [];
    while(true){
        //console.log(n%3);
        answer.push(n%3);
        n = Math.floor(n/3);
        if(n===0)
            break;
    }
    answer=parseInt(answer.join(''),3);
    return answer;
}

var n = 45;
console.log(solution1(n));