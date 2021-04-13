function solution(arr) {
    var answer = 0;
    answer = arr.reduce((sum,current)=>sum+current);
    return answer/arr.length;
}