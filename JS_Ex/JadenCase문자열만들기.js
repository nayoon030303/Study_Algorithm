/*
my code
*/

function solution(s) {
    
    //모두 toLowerCase()
    var answer = s.toLowerCase().split('');
    
    //첫번째 글자만 toUpperCase
    answer[0] = answer[0].toUpperCase();
    for(var i=1; i<answer.length; i++){
        //i가 공백 i+1이 undefined가 아니라면
        if(answer[i] ===' '  && answer[i+1]!==undefined){
            //console.log(answer[i+1]+"");
            answer[i+1] = answer[i+1].toUpperCase();
        }
    }
    answer=answer.join('');
    return answer;
}

s = "abc e3c ";
//console.log(solution(s));

/*
other solution
*/

function solution1(s){ 
    var answer = s.split(' ').map((content)=>{
        return content.charAt(0).toUpperCase()+content.substring(1);
    }).join('');

    return answer;
}

s = "abc e3c ";
console.log(solution1(s));
