function solution(board, moves) {
    var answer = 0;
    var basket = [];

    for(var i=0; i<moves.length; ++i)
    {
        moveNum = moves[i];
        moveNum-=1;
        for(var j=0; j<board[0].length; j++)
        {
            if(board[j][moveNum] !== 0 )
            {   
                
                basket.push(board[j][moveNum]);
                board[j][moveNum] = 0;
                break;
            }
            
        }
        
    }

    console.log(basket);
    for(var i =0; i<basket.length-1; i++)
    {
        console.log(basket.length);
        console.log(i,basket[i] );
        console.log(i+1,basket[i+1] );

        if(basket[i] === basket[i+1])
        {
            
            answer+=2;
           /* basket = basket.filter((content,index)=>
            {
                return index !== i;
            });
            basket = basket.filter((content,index)=>
            {
                return index !== i;
            });*/
           
            //
           
            basket.splice(i,2);
            console.log(basket);
            i = -1;
            //console.log(basket);
        }
    }
   
    //console.log(answer);
    return answer;
}

// var board = [
//     [0,0,0,0,0],
//     [0,0,1,0,3],
//     [0,2,5,0,1],
//     [4,2,4,4,2],
//     [3,5,1,3,1]];
   var board = [
       [0, 0, 1, 0, 0], 
       [0, 0, 1, 0, 0], 
       [0, 2, 1, 0, 0], 
       [0, 2, 1, 0, 0], 
       [0, 2, 1, 0, 0]];

var moves = [1, 2, 3, 3, 2, 3, 1];
console.log(solution(board,moves));