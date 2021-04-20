/*function solution(participant, completion) {
    var answer = '';

    console.log(participant);
    for(i in participant)
    {
        var check = completion.includes(participant[i]);
        if(check)
        {
            completion = completion.filter((component)=>component!==participant[i]);
        }else
        {
         
            answer  = String(participant[i])
            break;

        }

    }
  
        
    return answer;
}*/

//틀린 코드
function solution1(participant, completion) {
    var answer = '';
    
    for(var i=0; i<participant.length; ++i)
    {
        var check = completion.includes(participant[i]);
        if(check)
        {
            completion = completion.filter((component)=>component!==participant[i]);
        }else
        {
            answer = String(participant[i]);
            break;
        }
       
    }
    
    
    return answer;
}



participant = ["mislav", "stanko", "mislav", "ana"];
completion = ["stanko", "ana", "mislav"];
var answer = solution1(participant, completion);


/*
이름 배열을 정렬을 한다.
정렬후 비교 할 때 틀린 값이 있다면 그 값을 return
*/

function solution2(participant, completion) {
    var answer = '';

    participant.sort();
    completion.sort();
    //console.log(participant);
    //console.log(completion);

    for(var i =0; i<participant.length; ++i)
    {
        if(participant[i] !==completion[i])
        {
            
            answer = String(participant[i]);
            break;
        }
    }
    return answer;
}

participant = ["leo", "kiki", "eden"];
completion = ["eden", "kiki"];
answer = solution2(participant, completion);
console.log(answer);