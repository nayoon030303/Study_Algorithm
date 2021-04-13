function solution(arr)
{
    var answer = [];
    
    /*for(var i=0; i<arr.length-1; i++)
    {
        if(arr[i] === arr[i+1])
        {
            arr  = arr.filter((content,index)=>index!==i);
            i = -1;
        }
    }
    answer = arr;*/
   /* arr=arr.filter((content,index)=>
    {
        console.log(content,arr[index+1]);
        return content !== arr[index+1];
    });
    answer = arr;*/
    answer = arr.filter((content,index)=>content!== arr[index+1]);
    return answer;
}

arr = [1,1,3,3,0,1,1];
var r = solution(arr);
console.log(r);