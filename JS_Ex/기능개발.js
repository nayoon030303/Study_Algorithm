function solution(progresses, speeds) {
    var count = 0;
    var an = []

    //남은 일수를 구한다.
    var remainDay = progresses.map((content,idx)=>Math.ceil((100-content)/speeds[idx]));

    //answer[0]을 max에 넣는다.
    var max = remainDay[0];

    for(var i=0; i<remainDay.length; i++){
        count+=1;

        //다음 숫자가 max보다 크면은 
        if(remainDay[i+1]>max || remainDay[i+1]===undefined){
            
            an.push(count);
            max = remainDay[i+1];
            count = 0;
        }
        
    }
    console.log(remainDay);
    return an;
}

p =  [40, 93, 30, 55, 60, 65] ;
s =[60, 1, 30, 5 , 10, 7];
console.log(solution(p,s));