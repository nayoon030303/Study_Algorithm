/*
other
*/
function solution(x, n) {
    //Array(n): n개의 배열 만들기
    //.fill(x): x로 채우기

    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

/*
my code
*/
function solution(x, n) {
    var answer = [];
    for(var i=0; i<n; i++){
        answer.push(x+x*i);
    }
    return answer;
}