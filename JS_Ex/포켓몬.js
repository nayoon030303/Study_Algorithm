function solution(nums) {
    //배열 set객체로 만들기
    var answer = new Set(nums);
    var n = nums.length/2;

    //set객체에서 배열로 만들기
    answer = [...answer].length;
    if(answer>n){
        answer = n;
    }

   
    return answer;
}