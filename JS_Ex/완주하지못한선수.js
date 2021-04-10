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



function solution2(participant, completion) {
    var answer = '';

    participant.sort();
    completion.sort();
    console.log(participant);
    console.log(completion);

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