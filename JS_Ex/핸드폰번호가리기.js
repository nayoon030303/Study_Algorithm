/*
my code
*/
function solution(phone_number) {
    var answer = '';
    var s = "*".repeat(phone_number.length-4);
    var last = phone_number.slice(phone_number.length-4);
    
    answer = s+last;
    console.log(answer);
    return answer;
}

/*
other code
*/
function solution(phone_number) {
    var answer = '';
    
    answer = "*".repeat(phone_number.length-4)+phone_number.slice(-4);
    console.log(answer);
    return answer;
}