function solution(arr) {
    var answer = 0;
    /*
    reduce: 
    */
    answer = arr.reduce((sum,current)=>sum+current);
    return answer/arr.length;
}