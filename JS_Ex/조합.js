function combination(arry, num)
{
    const result = [];
    if(num ===1) return arry.map((value)=>[value]);
    for(var i=0; i<num; i++)
    {
        var a = arry[i];
        var b = combination(arry,i);
    }
}

arr = [1,2,7,6,4];
num = 4;
combination(arr,num);