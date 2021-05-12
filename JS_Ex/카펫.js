/**
 * my code 
 * h+2 * w+2 가 brown+yellow인것
 * yellow를 가지고 계산
 */
function solution(brown, yellow) {
    if(yellow===1)return[3,3];
    for(let i=1; i<=yellow/2; i++){
       let h = i;
       let w = yellow/i;
       if(w%Math.floor(w)===0){
           if(brown+yellow===(h+2)*(w+2)){
               console.log(w,h);
               return [w+2,h+2];
           }
       }
       
   } 
}

/**
 * 코드 고치기
 * 시간효울더 좋음 0.n
 * brown을 가지고 계산
 */
function solution(brown, yello){
    let answer = [];
    for(let i=3; i<=(brown+yello)/i; i++){
        let x = Math.floor((brown+yello)/i);
        if((x-2)*(i-2)===yello){
            return [x,i];
        }
    }
   
}