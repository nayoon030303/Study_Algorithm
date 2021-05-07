function solution(numbers, target) {
    var answer = 0;
    return answer;

    function recur(cnt, sum){
        if(cnt===numbers.length){
            if(sum===target){
                answer++;
            }
            return;
        }

        //+,-연산 모두 수행
        recur(cnt+1, sum+numbers[cnt]);
        recur(cnt+1, sum-numbers[cnt]);
    }
}