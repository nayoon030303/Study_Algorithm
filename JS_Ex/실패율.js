function solution(N, stages) {
    var answer = [];
    for (var i = 1; i<=N; i++){
        var challenger = stages.filter((content)=>content>=i).length;
        var fail = stages.filter((content)=>content === i).length;
        answer.push(fail/challenger);
    }
    var an = answer.map((content,index)=>index+1);
    an.length = N;
    for(var i=0; i<N-1; i++){
        for(var j=i; j<N; j++){
            if(answer[i]<=answer[j]){
                if(answer[i] === answer[j]){
                    if(an[i]>an[j]){
                        temp = an[j];
                        an[j] = an[i];
                        an[i] = temp;
                    }
                }else{
                    var temp = answer[j];
                    answer[j] = answer[i];
                    answer[i] = temp;   
                    temp = an[j];
                    an[j] = an[i];
                    an[i] = temp;
                }
   
            }
        }
    }
  
    answer = an;
    return answer;
}