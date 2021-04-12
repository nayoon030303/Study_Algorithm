function solution(s) {
    var answer = '';
    
    /*
    JavaScript에서는 / 는 소수점까지 나타낸다. 
    만약 소수점을 버리고싶다면 Math.floor()
    소수점 올림 Math.ceil()
    소수점 반올림 Math.round()
    */
    var center = s.length/2 ;
    //console.log(center);
    center = Math.floor(center);
    console.log(center);
    if(s.length%2===0)
    {
        answer = s.slice(center-1,center+1);
    }else
    {
        answer = s[center];
    }
    
    return answer;
}

s = "qwed";
console.log(solution(s));