function solution(s){

    var stack = [];

    for(var i=0 ;i<s.length; i++){
        if(!stack.length){
            stack.push(s[i]);
        }else if((s[i] ===')' && stack[stack.length-1]==='(')){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    //console.log(stack);
    if(!stack.length)return true;
    else return false;
    
}