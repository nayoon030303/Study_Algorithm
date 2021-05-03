function solution(m, n, board) {
    
    board = board.map((v)=>v.split(''));
    let answer = 0;
    let delete_list = []; //삭제할 배열을 담음
    let checkEngA = /[A-Z]/; //대문자 판단
    let checkEnga = /[a-z]/; //소문자 판단
    
    while(true){
        
        //2*2찾기
        for(let h =0; h<m-1; h++){
            for(let w =0; w<n-1; w++){
                if(board[h][w]===0 || board[h+1][w]===0 
                   || board[h][w+1]===0 || board[h+1][w+1]===0)continue;
                let current = board[h][w].toLowerCase();
                if(current===board[h+1][w].toLowerCase()  
                   && current===board[h][w+1].toLowerCase() 
                   && current===board[h+1][w+1].toLowerCase() 
                   ){
                    delete_list.push([h,w]);
                    board[h][w] = current;
                    board[h+1][w] = current;
                    board[h][w+1] = current;
                    board[h+1][w+1] = current;
                }
                
            }
        } 
        //console.log(board);
        
        var check = answer;
        //블록 떨어지기
        for(let w =0; w<n; w++){
            let temp = [];
            for(let h =0; h<m; h++){
                if(checkEngA.test(board[h][w])){ //대문자만 추가
                    temp.push(board[h][w]);
                }else if(checkEnga.test(board[h][w])){
                    answer+=1;
                }
            }
            if(temp.length<m){
                let a = new Array(m-temp.length);
                a.fill(0);
                //console.log(a);
                temp.unshift(...a);
            }
            for(let h =0; h<m; h++){//대입
                board[h][w] = temp[h];
            }
            
        }
        if(check === answer)break;
        
    }
     
    //console.log(delete_list);
    console.log(answer);
    
    return answer;
}