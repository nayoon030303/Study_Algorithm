function solution(n) {
    var answer = 0;
    var len = n.toString(2).split('').filter((content)=>content==='1').length; //n을 2진수고 바꾼 수의 1의 계수를 찾는다.
    while(true){

        //n을 하나씩 증가한다.
        n+=1;

    
        if(n.toString(2).split('').filter((content)=>content==='1').length===len){
            return n;
        }
            
    }
    
    
}