/*
other code
*/
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}

/*
my code
*/
function solution(n) {
    var answer = 0;
    n = String(n);
    answer = n.split("").sort((a,b)=>b-a).join('');
    //answer = Number(n.replace(/\,/g,''));
    //console.log(n);
    return answer;
}