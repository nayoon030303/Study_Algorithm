function solution(num) {
    var answer = 0;
    var i=0;
    while(i<500 && num !==1){
        if(num%2===0){
            num/=2;
        }else {
            num = num*3+1;
        }        
        i++;
    }
    if(i>=500)answer = -1
    else answer = i;
    console.log(num,i);
    return answer;
}