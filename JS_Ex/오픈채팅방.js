/**
 * 잘 동작하나 테스트케이스 26부터 시간초과 
 */

function solution(record) {
    
    record = record.map((v)=>v.split(' '));
    var id_list = [...new Set(record.map((v)=>v[1]))];
    var idMap = new Map();
    var answer = [];
    
    
    //마지막 닉네임 찾기 
    for(var i=0; i<id_list.length; i++){
        for(var j=record.length-1; j>=0; j--){
            if(record[j][1]===id_list[i]&&
                (record[j][0]==='Enter' || record[j][0]==='Change')){
                //id_list[i] = [id_list[i],record[j][2]];
                idMap.set(id_list[i]+"",record[j][2]+"");
                //console.log(idMap.size);
                break;
            }            
        }
    }
    
    //id->닉네임으로 치환
    for(var j=0; j<record.length; j++){
       if(record[j][0]==='Enter'){
           
           answer.push(idMap.get(record[j][1])+'님이 들어왔습니다.');
       }else if(record[j][0]==='Leave'){
           answer.push(idMap.get(record[j][1])+'님이 나갔습니다.');
       }
    }
    
    return answer;
}

/**
 * 고친 코드
 */

 function solution(record) {
    
    var answer = [];

    
    //id->닉네임으로 치환
    for(var i=0; i<record.length; i++){
       if(record[i][0]==='E'){     
           answer.push(record[i].split(' ')[1]+'님이 들어왔습니다.');
       }else if(record[i][0]==='L'){
            answer.push(record[i].split(' ')[1]+'님이 들어왔습니다.');
       }
    }
    
    return answer;
}