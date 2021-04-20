function solution(dartResult) {
    var answer = 0;
    var num=[];
    
    /*string을 배열로 만든다. */
    dartResult = dartResult.split('');

    
    dartResult.filter((content,index)=>{
        /*1 0 따로 있는 것을 숫자 하나로 바꿔준다. */
        if(!isNaN(dartResult[index-1])&&(content === '0')){
            dartResult.splice(index-1,1,'10');
            dartResult.splice(index,1);
        }
    });


    for(var i=0; i<dartResult.length; i++){
        
        /*값을 2배 */
        if(dartResult[i] ==='*'){
            if(num.length>1){
                num[num.length-2]*=2;
            }
            num[num.length-1]*=2;
            continue;
        /*현재 값을 *-1 */
        }else if(dartResult[i] ==='#'){
            num[num.length-1]*=-1;
            continue;
        }
        
        if(dartResult[i+1] === 'S'){
            num.push(Number(dartResult[i]));
        }else if(dartResult[i+1] === 'D'){
            num.push(Math.pow(dartResult[i],2));
        }else if(dartResult[i+1] === 'T'){
            num.push(Math.pow(dartResult[i],3));
        }
    }
    
    answer = num.reduce((sum,cur)=>sum+cur);
    //console.log(dartResult);
    //console.log(num);
    
    //console.log(dartResult);
    return answer;
}