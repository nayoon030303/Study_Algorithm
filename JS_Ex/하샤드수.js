function solution(x) {
    var answer = true;
    var sum =0 ;
    var xx =x;
    
    var max =String(x).length;
    for(var i=0; i<max; i++){
        sum += x%10;
        x= Math.floor(x/10);
    }
    if(xx%sum === 0){
        answer = true;
    }else{
         answer = false;
    }
       
    //console.log(x,sum,x%sum);
    
    
    return answer;
}