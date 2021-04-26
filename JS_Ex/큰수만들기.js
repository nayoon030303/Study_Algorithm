function solution(number, k) {
    var len = number.length-k;
    number = number.split('');
    for(var i=0; i<number.length; i++){
        if(number[i]<number[i+1] && number.length>len){
            number = number.filter((content,index)=>index!=i);
            i = -1;
        }
    }
    
    console.log(number);
    return number.join('');
}