function solution(nums) {
    var answer = 0;
    
    var arr = [];
    var value = [];

    /*조합 구하기 */
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
            
            if(num%j === 0 && j !==num)
            {
                console.log('b',j,num);
                break;
            }else if(j === num)
            {
                console.log(num);
                answer+=1;
            }
        
        }
    }

    return answer;
}

nums = [1,2,7,6,4];
solution(nums);