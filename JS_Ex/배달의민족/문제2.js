function solution(leave,day,holidays){
    var answer = -1;
    var days = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
    var sat = 0;
    var sun = 0;
    var month = new Array(31).fill(0);

    if(day==='SAT'){
        sat = 1;
        sun = 2;
    }else if(day==='SUN'){
        sun = 1;
        sat = 7;
    }else{
        sat = 1+5-days.indexOf(day);
        sun = sat+1;
    }

    for(let i=sat; i<month.length; i+=7){
        month[i]=1;
    }
    for(let i=sun; i<month.length; i+=7){
        month[i] = 1;
    }
    for(let i=0; i<holidays.length; i++){
        month[holidays[i]]=1;
    }

    var an = [];
    for(let i=1; i<month.length; i++){
        if(month[i]===1){
            var t = i;
            var temp = leave;
            while(temp>-1 && t<=31){
                if(month[t]===0)temp-=1;
                t+=1;
            }
            an.push(t-i-1);
        }
    }
    answer = Math.max.apply(null,an);
    return answer;
}