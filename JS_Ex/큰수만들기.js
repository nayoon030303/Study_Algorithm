function solution(number, k) {
    var len = number.length-k;
    number = number.split('').map((content)=>Number(content));
    for(var i=0; i<number.length; i++){
        if(k<=0)break;
        if(number[i]===9){
            i = i+1;
            break;
        };
        if((number[i]<number[i+1]|| number[i+1]===undefined) && k>0){
            number.splice(i,1);
            k-=1;
            i=-1;
        }
    }
    
    console.log(number.length);
    return number.join('');
}
number = '9999';
console.log(number.length);
k = 2;
console.log(solution(number,k));

// if(number[i]===9 && i<len-1){
//     console.log('break');
//     continue;
// }
// //console.log(number[i],number[i+1]);
// if(number[i]<number[i+1] && number.length>len){
//     number.splice(i,1);
//     i = -1;
// }else if(number[i] ===number[i+1] && number.length>len){
//    // console.log('a');
//     number.splice(i,1);
//     i = -1;
// }