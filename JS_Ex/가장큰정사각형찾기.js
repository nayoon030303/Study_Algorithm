function solution(board)
{
    var max = 0;
    if(board.length===1 && board[0].length ===1){
        if(board[0][0]===0)return 0
        else return 1
    }
    for(var i=1; i<board.length; i++){
        for(var j=1; j<board[i].length; j++){
            if(board[i][j] !==0 ){
                board[i][j]=Math.min(board[i-1][j],board[i][j-1],board[i-1][j-1])+1;
            }
        }
        max = max<Math.max.apply(null,board[i])?Math.max.apply(null,board[i]):max;
        //console.log(max,board[i]);
    }
    
    return max*max;
}