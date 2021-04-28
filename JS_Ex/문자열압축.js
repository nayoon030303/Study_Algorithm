function solution(s) {

    //압축하는 함수
    const mapping = function(s,idx){

        let start = 0; 
        let end = idx;
        let count = 1; 
        let result = ""; //문자 저장
        while(start<s.length){
            
            let current = s.slice(start,end);
            let next = s.slice(start+idx,end+idx);
            
            start+=idx;
            end+=idx;
            
            if(current===next){
                count+=1;
            }else{
                if(count===1){
                    result+=current;
                }else{
                    result+=count+current;
                }
                count = 1;
            }
        }
        return result.length;
    }
    
    var min = 1000;
    
    //1부터 s.length/2 단위로 압축
    //console.log(s.length/2);
    if(s.length===1)return 1;
    for(var i=1; i<=s.length/2; i++){
        //console.log(mapping(s,i));
        min = mapping(s,i)<min?mapping(s,i):min;
    }
   
    
    return min;
}