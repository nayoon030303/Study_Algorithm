/**
 * 테스트케이스틑 통과
 * 효율성 통과 X
 * 2~8오류
 */

function solution(s)
{
    s = s.split("");
    for(let i = 0 ; i < strArr.length-1 ; i++){
      if(strArr[i] === strArr[i+1]){
           strArr.splice( i, 2 );
            i = -1;
        }
    }
    
    return strArr.length === 0 ? 1 : 0;
    
}

/**
 * stack을 사용해서 
 * for문을 한번만 돈다.
 */

function solution(s)
{
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(!stack.length || s[i]!==stack[stack.length-1]){//스택이 비어있거나 or 스택 마지막값과 다르면 스택에 push
            stack.push(s[i]);
        }else{//스택 마지막값과 같다면 stack에서 pop
            stack.pop();
        }
    }
    
    if(!stack.length)return 1;
    else return 0;
   
    
}