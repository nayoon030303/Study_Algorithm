function solution(n, lost, ) {
    var answer = 0;

    /*같은 숫자 확인 */
    for(var i=0; i<reserve.length; i++)
    {
        var num = reserve[i];

        var ch = lost.indexOf(num);
        if(ch !==-1)
        {
            lost = lost.filter((content)=>content!==num);
            reserve = reserve.filter((content)=>content!==num);
            i = -1;
        }
    }

    for(var i=0; i<reserve.length; i++)
    {
        var num = reserve[i];
        for(var j=0; j<lost.length; j++)
        {
            if(lost[j] === num+1)
            {
                lost = lost.filter((content)=>content!==num+1);
                break;
            }else if(lost[j] === num-1)
            {
                lost = lost.filter((content)=>content!==num-1);
                break;
            }
        }
    }
    console.log(lost,reserve);
    answer = n - lost.length;
    return answer;
}

var n = 5;
var lost =   [2, 3, 4] ;
var reserve = [1, 2, 3] ;
console.log(solution(n,lost,reserve));


        /**/