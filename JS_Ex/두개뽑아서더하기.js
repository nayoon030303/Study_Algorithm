
/*
use indexOf(), filter()
*/
function solution1(numbers) {
    var answer = [];
    var test = [];
    
    for(let i =0; i<numbers.length; ++i)
    {
        for(let j=0; j<numbers.length; ++j)
        {
            if(i==j) continue;
            test.push(numbers[i]+numbers[j]);
        }
    }
    
    answer = test.filter((element,index)=>{
        return test.indexOf(element) === index;    
    });
    //console.log(answer);
    answer.sort((a,b)=>a-b);
    return answer;
}

numbers = [5, 0, 2, 7];
answer = solution1(numbers);
console.log(answer)


/*
use  new Set();
*/

function solution2(numbers) {

    var answer = [];

    for(let i=0; i<numbers.length; ++i)
    {
        for(let j=0; j<numbers.length; ++j)
        {
            if(i == j)continue;
            answer.push(numbers[i]+numbers[j]);  
        }
    }

    const set = new Set(answer);

    answer = [...set];
   // answer.sort((a,b)=>a-b);
   console.log(answer)
   answer.sort((a,b)=>
   {
    console.log(a,b);
   });
    
    return answer;
 }

 numbers = [5, 0, 2, 7];
 answer = solution2(numbers);
 console.log(answer)

