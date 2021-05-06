function solution(maps) {
    
    var h = maps.length;//행 크기
    var w = maps[0].length; //열 크기
    var queue = [[0,0]];

    //상 하 좌 우 
    let dy = [-1,1,0,0];
    let dx = [0,0,-1,1];
    
    while(queue.length>0){
        let top = queue.shift();
        let x = top[0];
        let y = top[1];
        
        for(let i=0; i<4; i++){
            let nx = x+dx[i];
            let ny = y+dy[i];
            
            //공간을 벗어난 경우 무시
            if(nx<0 || nx>=w || ny<0 || ny>=h)continue;
            
            //0인 경우 무시
            if(maps[ny][nx]===0)continue;
            
            //해당 노드를 처음 방문하는 경우에만 최단 거리
            if(maps[ny][nx]===1){
                maps[ny][nx] = maps[y][x]+1;
                queue.push([nx,ny])
            }
        }
        
    }
    if(maps[h-1][w-1]===1)return -1; //상대 팀 진영에 도착할 수 없슴
    else return maps[h-1][w-1];
    //console.log(maps);
    
}