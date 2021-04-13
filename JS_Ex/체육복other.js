function solution(n, lost, reserve) {      
    return n - lost.
    filter(a => {const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}
function solution1(n, lost, reserve) {     
    const realLost = lost.filter((i)=>reserve.includes)
}
var n = 5;
var lost =   [2, 3, 4] ;
var reserve = [1, 2, 3] ;
console.log(solution(n,lost,reserve));