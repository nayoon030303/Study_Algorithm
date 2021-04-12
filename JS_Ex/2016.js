function solution(a, b) {
    var answer = '';
    var week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    
    //answer = week[new Date('2016-07-28').getDay()];
    /*
    month: 0~11
    */
    answer = week[new Date(2016,a-1,b).getDay()];

    return answer;
}

console.log(solution(5,24));