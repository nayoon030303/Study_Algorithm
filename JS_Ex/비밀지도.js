function solution(n, arr1, arr2) {
    var answer = [];

    for(var i=0; i<n; i++){
        //arr1[i] 와 arr[2]를 or 연산을 하고 그 값을 answer에 푸쉬
        answer.push((arr1[i]|arr2[i]).toString(2).split(''));

        //n을 맞추기 위해 n보다 길이가 짧은 배열에는 앞에 0을 추가한다.
        while(answer[i].length<n){
            answer[i].unshift('0');
        }
        
        answer[i] = answer[i].map((content)=>{
            if(content==='1')
                return '#';
            else
                return ' ';
        }).join('');
    }
    //console.log(answer);
    return answer;
}