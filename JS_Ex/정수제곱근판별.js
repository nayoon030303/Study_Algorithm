/*
other code
*/
function nextSqaure(n){
    var result = 0;
    var x = 0;
    while (x*x < n){
      x++;
    }
    if (x*x == n){
      x++;
      result = x*x; 
    }else{
      result = 'no';
    }
  
    return result;
  }

  /*
  my code
  */
  function solution(n) {
    var answer = 0;
    var sq = Math.sqrt(n);
    if(sq%1===0){
        answer = (sq+1)*(sq+1);
    }else{
        answer = -1;
    }
   // console.log( Math.sqrt(n));
    return answer;
}