/**
 * 점을가지고 계산하면되겠다고 생각했지만
 * 길이를 구해야함
 */
function solution(dirs) {
   
    let map = [];
    let playerX = 0;
    let playerY = 0;
   
    for(var i=0; i<dirs.length; i++){
        if(dirs[i]==='U'){
            playerY+=1;
        }else if(dirs[i]==='D'){
            playerY-=1;
        }else if(dirs[i]==='L'){
            playerX-=1;
        }else if(dirs[i]==='R'){
            playerX+=1;
        }
        if(playerY>5 || playerY<-5 || playerX >5 || playerX<-5)continue;
        map.push(playerX+','+playerY);
    }
    //console.log(map);
    let set = new Set(map);
    return set.size+1;
    // set.forEach(function(value) {
    //     console.log(value);
    // });
   
}
/**
 * UDU은 1이어야한다. 
 * 
 */
function solution(dirs) {
   
    let dir = [];
    let playerX = 0;
    let playerY = 0;
    let before  = '0,0';
    
    for(var i=0; i<dirs.length; i++){
        let flag = true;
        if(dirs[i]==='U'){
            if(playerY+1===6)continue;
            playerY+=1;
        }else if(dirs[i]==='D'){
            if(playerY-1===-6)continue;
            flag = false;
            playerY-=1;
        }else if(dirs[i]==='L'){
            if(playerX-1===-6)continue;
            flag = false;
            playerX-=1;
        }else if(dirs[i]==='R'){
            if(playerX+1===6)continue;
            playerX+=1;
        }
        
        if(flag){//위 오른쪽
            dir.push(before+"-"+playerX+','+playerY);
        }else{
            dir.push(playerX+','+playerY+"-"+before);
        }
       
        before = playerX+','+playerY;
    }
    //console.log(dir);
    let set = new Set(dir);
    return set.size;
    // set.forEach((v)=>{
    //     console.log(v);
    // });
   
}