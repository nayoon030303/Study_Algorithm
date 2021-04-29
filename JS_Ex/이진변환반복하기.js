function solution(s) {
    
    let zero = 0;
    let zero_len=0;
    let count =0;
    
    while(s!=='1'){
        zero_len = s.split('').filter((v)=>v==='0').length; //제거할 0의 개수
        zero+=zero_len;
        s = (s.length-zero_len).toString(2); //이진변환 결과
        count+=1;
        //if(current=='1')break;
    }
    return [count,zero];
    //console.log(count,zero);
    
}