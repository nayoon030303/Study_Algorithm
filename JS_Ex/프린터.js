/*
런타임 에러
*/
function solution(priorities, location) {
    
    priorities = priorities.map((v,idx)=>{
        if(idx===location)
            return v+10;
        else return v;
    });
    
    for(var i=0; i<priorities.length; i++){
        var current = priorities[i];
        for(var j=i+1; j<priorities.length; j++){
            if(current%10<priorities[j]%10){
                var first = priorities.shift();
                priorities.push(first);
                i=-1;
                break;
            }
        }
        
    }
    var index=0;
    priorities.filter((v,i)=>{
       if(v>10)index =i; 
    });
    //console.log(index);
    return index+1;
}

/*
other code
*/
function solution(priorities, location) {
    var answer = 0;
    var cnt = 0;  //몇번 인쇄했는지
    var myDoc = location;
    
    while(priorities.length>0){
        var wait = priorities.shift(); 
        
        //맨앞의 문서보다 우선순위가 존재한다면
        if(priorities.filter((value)=>value>wait).length>0){
            priorities.push(wait);
        }else{ //존재하지 않는다면.
            cnt++; //인쇄 카운트 증가
            if(myDoc === 0)
                return answer = cnt;
        }
        myDoc--; //문서를 꺼낼때 마다 내 문서의 위치를 하나씩 줄인다.
        if(myDoc ===-1){//내 문서가 맨뒤로 간다면
            myDoc = priorities.length-1;
        }
    }
    return answer;
}