function solution(s){

    var stack = [];

    for(var i=0 ;i<s.length; i++){
        if(!stack.length){ //stack이 비어있다면
            stack.push(s[i]);
        }else if((s[i] ===')' && stack[stack.length-1]==='(')){ //()라면 stack을 pop
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    
    if(!stack.length)return true; //stack이 비어있다면 return true
    else return false;
    
}