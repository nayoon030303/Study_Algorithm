function solution(n) {
    var answer = '';
    while(n>0){
        if(n%3===0){//나머지가 0일때
            //answer.push(4);
            answer = 4+''+answer;
           
        }else{
            //answer.push(n%3);
            answer = (n%3)+''+answer;
            //n = Math.floor(n/3);
        }
        n = Math.floor((n-1)/3);
    }
    //answer=answer.reverse().join('');
    return answer;
}

let n = 6;
console.log(solution(n));

function change124(n) {
    var answer = "";
      var array1_2_4 = new Array(4, 1, 2); //3%3 = 0, 1%3 = 1, 2%3 = 2
  
    while(n) {
      answer = array1_2_4[n % 3] + answer;
      n = Math.floor((n - 1) / 3);
    }
  
    return answer;
  }