function solution(rows, columns, queries) {
    var answer = [];
    var board = [];
    for(var i=1; i<=rows*columns; i++){
        board.push(i);
    }
    console.log(queries.length);
    for(var j=0; j<queries.length; j++){
        var y1 = queries[j][0]-1;
        var x1 = queries[j][1]-1;
        var y2 = queries[j][2]-1;
        var x2 = queries[j][3]-1;
        var temp = [];
        console.log(y1,x1,y2,x2);
        //x1 
        for(var i=x1; i<x2; i++){
            temp.push(board[(y1)*columns+(i)]);
        }
        //y1
        for(var i=y1; i<y2; i++){
            temp.push(board[(i)*columns+(x2)]);
        }
        //x2
        for(var i=x2; i>x1; i--){
            temp.push(board[(y2)*columns+(i)]);
        }
        //y2
        for(var i=y2; i>y1; i--){
            temp.push(board[(i)*columns+(x1)]);
        }
        var t = temp.pop();
        temp.unshift(t);
        answer.push(Math.min.apply(null,temp));
        
        var n = 0;
        //x1
        for(var i=x1; i<x2; i++){
            board[(y1)*columns+(i)] = temp[n++];
        }
        //y1
        for(var i=y1; i<y2; i++){
            board[(i)*columns+(x2)]=temp[n++];
        }
        //x2
        for(var i=x2; i>x1; i--){
            board[(y2)*columns+(i)]=temp[n++];
        }
        //y2
        for(var i=y2; i>y1; i--){
            board[(i)*columns+(x1)]=temp[n++];
        }
        
        
    }
    return answer;
}

var rows = 6;
var col = 6;
var q = [[2,2,5,4],[3,3,6,6],[5,1,6,3]];

console.log(solution(rows,col,q));