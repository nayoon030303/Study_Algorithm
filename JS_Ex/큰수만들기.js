function solution(number, k) {
    var len = number.length-k;
    number = number.split('').map((content)=>Number(content));
    for(var i=0; i<number.length; i++){
      
        if(k<=0)break;

        //current가 current+1보다 작으면 
        if((number[i]<number[i+1]|| number[i+1]===undefined)){

            //current 삭제
            number.splice(i,1);
            k-=1;
            i=-1;
        }
    }
    
    return number.join('');
}
        
number = '4177252841';

k = 4;
console.log(solution(number,k));
