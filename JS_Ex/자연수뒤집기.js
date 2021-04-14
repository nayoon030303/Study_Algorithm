/*
best code
*/
function solution(n) {
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
var a = [1,2];
a.sort()
/*
my code
*/
function solution1(n) {
    var answer = [];
    answer = String(n).split("").reverse();
    answer = answer.map((content)=>Number(content));
    console.log(answer);
    return answer;
}