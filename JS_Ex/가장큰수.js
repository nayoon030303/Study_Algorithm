function solution(numbers) {
    var answer = '';
    answer = numbers.map((v)=>v+'').sort((a,b)=>(b+a)-(a+b)).join(''); //배열로 바꿔주기 

    // answer = answer.sort((a,b)=>{
    //     console.log((b+a),(a+b));
    // }).join('');
   
    return answer[0]==='0'?'0':answer;
}

var n = [6,10,2];
console.log(solution(n));