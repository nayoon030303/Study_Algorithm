/**
 * 처음에는 모두다 돌리는 것이 아닌 수학적 공식이 있을 줄 알았는데 아니였다.
 * 
 */
function solution(numbers, target) {
    var answer = 0;
    return answer;

    //
    function recur(cnt, sum){
        if(cnt===numbers.length){//끝까지 도달
            if(sum===target){//sum과 target이 같다면
                answer++;
            }
            return;
        }

        //+,-연산 모두 수행
        recur(cnt+1, sum+numbers[cnt]);
        recur(cnt+1, sum-numbers[cnt]);
    }
}