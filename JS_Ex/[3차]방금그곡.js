/**
 * error 코드 
 * 
 */
function solution(m, musicinfos) {
    
    for(var i=0; i<musicinfos.length; i++){
        var current = musicinfos[i].split(',');
        var start = current[0];
        var end = current[1];
        var name = current[2];
        var music = current[3];
        
        
        //#처리 해주기
        var a = m.split('').map((v,idx)=>{
            if(m[idx+1]==='#'){
                return v.toLowerCase();
            }else{
                return v;
            }
        });
        m = a.join('');
       
        a = music.split('').map((v,idx)=>{
            if(music[idx+1]==='#'){
                return v.toLowerCase();
            }else{
                return v;
            }
        });
        var count = a.filter((v)=>v==='#').length;
        music = a.join('');
        
        
         //분 계산하기 
         var hour = Number(end.slice(0,2))-Number(start.slice(0,2));
         var minute = Number(end.slice(3,5))-Number(start.slice(3,5));
         if(minute<0){
             hour-=1;
             minute+=60;
         }
         var time = hour*60+minute;
        
         //time만큼 music길이 맞추기
         while(music.length!==time){
             music+=music;
             time+=count;
             music = music.slice(0,time);
         }
        
         var temp =music.indexOf(m);
         if(temp!==-1){
            //console.log(music);
            //console.log(count);
            return name;
         }
         
         //console.log(i+m.length);
    }
    
    return "'(None)'"
}

/**
 * 20~24 29~30 error
 * #부분 소문자로 치환
 * 22,23,24,29 error=>'(None)'
 */

 function solution1(m, musicinfos) {
    var answer = [];
      m=m.replace(/(C#)/g,'c')
            .replace(/(D#)/g,'d')
            .replace(/(F#)/g,'f')
            .replace(/(G#)/g,'g')
            .replace(/(A#)/g,'a')
        ;
    for(var i=0; i<musicinfos.length; i++){
        var current = musicinfos[i].split(',');
        var start = current[0];
        var end = current[1];
        var name = current[2];
        var music = current[3];
        
        
        //#처리 해주기
      
     
        music = music.replace(/(C#)/g,'c')
            .replace(/(D#)/g,'d')
            .replace(/(F#)/g,'f')
            .replace(/(G#)/g,'g')
            .replace(/(A#)/g,'a')
        ;
        
         //분 계산하기 
         var hour = Number(end.slice(0,2))-Number(start.slice(0,2));
         var minute = Number(end.slice(3,5))-Number(start.slice(3,5));
         if(minute<0){
             hour-=1;
             minute+=60;
         }
         var time = hour*60+minute;
        
         //time만큼 music길이 맞추기
         while(music.length!==time){
             music+=music;
             music = music.slice(0,time);
         }
        
         var temp =music.indexOf(m);
         if(temp!==-1){
            answer.push([name,time]);
         }
         
    }
    //조건 일치하는 음악이 여러개일 때 
    if(answer.length>0){
        var max=answer[0][1];
        var an = answer[0][0];
        for(var i=1; i<answer.length; i++){
            if(max<answer[i][1]){ //answer[i][1]이 map보다 커야지 변경된다. 
                max = answer[i][1];
                an = answer[i][0];
            }
        }
        
    }else{
        an = '(None)'
    }
    return an;
    console.log(an);
   
}
var m="ABCDE"
var a = ["12:00,12:06,HELLO,ABCDE","12:00,12:10,BYE,ABCDE"];
console.log(solution1(m,a));