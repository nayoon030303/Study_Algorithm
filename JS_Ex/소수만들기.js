function solution(nums) {
  var answer = 0;
  
  var arr = []; //조합으로 합한 수들 
  var value = [];

  /*조합 구하기 */
  //함수에 괄호를 치면 바로 실행한다.
  (function combination(nums,r,ii)
  {
    if(r>=3)
    {
      //console.log(value);
      const result = value.reduce((sum,current)=>sum+current);
      arr.push(result);
      //console.log(arr);
    }
    else
    {
      for(var i= ii+1; i<nums.length; i++)
      {
          value[r] = nums[i];
          combination(nums,r+1,i);
      }
    }
  })(nums,0,-1);
  
  console.log(arr);
  /*소수 찾기 */
  for(var i=0; i<arr.length; i++)
  {
      var num = arr[i];
      for(var j=2; j<=num; j++)
      {
          
          //num이 자기 자신말고 다른 수로 나눠진다면 break;
          if(num%j === 0 && j !==num)
          {
              break;
          }else if(j === num)
          {
              answer+=1;
          }
      
      }
  }

  return answer;
}

nums = [1,2,7,6,4];
solution(nums);