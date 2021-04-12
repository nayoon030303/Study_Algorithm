function solution(s) {
    var answer = 0;

    /*
    use parseInt
    parseInt: parseInt 메서드는 숫자로 시작하는 문자열을 숫자로 변환 할 수 있지만 Boolean은 변환 할 수 없다. 
    */
    //answer = parseInt(s);

    /*
    use Number: Number 객체는 온전한 숫자 형태의 문자열 과 Boolean을 숫자로 변환 할 수 있다. 
    Number:
    */
    /* */
    array = [];
    answer = Number(s);

    return answer;
}

s = "1234";
result = solution(s);
console.log(result);