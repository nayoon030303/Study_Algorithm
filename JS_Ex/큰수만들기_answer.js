function solution(number, k) {
   const stack = []; //글자들이 저장될 스택
   let answer = '';

   for(let i=0; i<number.length; i++){
       const element = number[i];

       //k가 0보다 크면서 element가 stack의 마지막값 보다 크면
       while(k>0 && stack[stack.length-1]<element){
           stack.pop();//마지막 값을 뺸다.
           k--;
       }
       stack.push(element);
   }

   console.log("an:"+stack);
   stack.splice(stack.length-k,k);
   answer = stack.join('');
   return answer;
}
        
number = '99991';
k = 2;
console.log(solution(number,k));