function solution(numbers, hand) {
    var answer = '';
    var left=10;
    var right = 12;

   
    
    for(var i=0; i<numbers.length; i++){
        var num = numbers[i];
        if(num ===1 || num ===4 || num===7){ //1 4 7 이라면 무족건 left
            left = num; //left가 있는 숫자
            answer+="L";
        } else if(num ===3 || num ===6 || num===9){ // 3 6 9 라면 무조건 right
            right = num; //right가 있는 숫자
            answer+="R";
        }else{
            if(num === 0) num = 11;
            //배열처럼 바꾸기
            var tx = (num-1)%3;
            var ty = Math.floor((num-1)/3);
            var lx = (left-1)%3;
            var ly = Math.floor((left-1)/3);
            var rx = (right-1)%3;
            var ry = Math.floor((right-1)/3);
            
            //console.log(num,tx,ty);
            if(Math.abs(tx-lx)+Math.abs(ty-ly)>Math.abs(tx-rx)+Math.abs(ty-ry)){ //t까지의 길이가 right가 더 작다면
                answer+="R";
                right = num;
             }else if(Math.abs(tx-lx)+Math.abs(ty-ly)<Math.abs(tx-rx)+Math.abs(ty-ry)){ //t까지의 길이가 left가 더 작다면
               answer+="L"; 
                left = num;
             }else{ //만약 t까지의 길이가 같다면
                 if(hand === 'right'){
                     right = num;
                     answer+='R';
                 }else{
                     left = num;
                     answer+='L';
                 }
            }
        }
    }
    return answer;
}