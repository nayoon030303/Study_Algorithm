function solution(msg) {
    var answer = [];
    var dic = Array.apply(null,Array(26)).map((v,i)=>String.fromCharCode(i+65)); //사전
    var current, slice_str;
    var i=0; 
    msg+='@';
    while(i<msg.length-1){
        
        var temp = i+1;       
        while(true){
            slice_str = msg.slice(i,temp);
            if(dic.includes(slice_str)){
                current = slice_str;
                temp++;
            }else{
                answer.push(dic.indexOf(current)+1);
                dic.push(slice_str);
                break;
            }
        }        
        i = temp-1; 
        current = msg[temp-1] //다음 글자
        
    }
    

var msg ='KAKAO';
console.log(solution(msg));