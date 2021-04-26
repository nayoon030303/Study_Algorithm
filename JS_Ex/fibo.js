/*
1. 기본 재귀적 풀이(recursion )
big O : O(2^n)
*/

function fibo(n){
    if(n<=1){
        return n;
    }
    return fibo(n-1)+fibo(n-2);
}

function solution1(n) {
    var answer = 0;
    var start =1;

    answer = fibo(n);
    return answer;
}

/*
2. 반복적 풀이 
big O : O(n)
*/
function solutio2n(n) {
    var answer = 0;
    
    var a=0,b=1;
    for(var i=0; i<n-1; i++){
        var temp = a+b;
        a = b;
        b = temp;
    }
    console.log(a,b);
    
    
    return b;
}

/*
store
*/

function solution(n) {
    var cache = new Array(n+1);
    cache[0] = 0;
    cache[1] = 1;
    
    for(var i=2; i<n+1; i++){
        cache[i] = cache[i-1]+cache[i-2];
    }
    
    return cache[n];
    //console.log(cache[n]);
}

/*
Bottom-Up
*/

function solution(n) {
    if(n)
}

