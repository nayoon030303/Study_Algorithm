function solution(weights,head2head){
    var answer = [];
    var person = [];
    for(var i=0; i<head2head.length; i++){
        person[i] = {idx:i+1, odd:0, heavy:0 ,weight:weights[i]};
        for(var j=0; j<head2head[i].length; j++){
            if(head2head[i][j] ==='W'){
                person[i].odd+=1;
                if(weights[i]<weights[j]){
                    person[i].heavy+=1;
                }
            }
        }
    }

    person.sort((a,b)=>{
        if(b.odd-a.odd===0){ //승률이 똑같다면
            if(b.heavy-a.heavy===0){
                return b.weight-a.weight;
            }else{
                return b.heavy-a.heavy;
            }
        }else{
            return b.odd-a.odd;
        }
    });
    for(var i=0; i<weights.length; i++){
        answer.push(person[i].idx);
    }
    return answer;
}