function solution(array, commands) {
    var answer = [];

    for(var i=0; i<commands.length; i++)
    {
        command = commands[i];
        var ii = command[0]-1;
        var j = command[1];
        var k = command[2];
        var value = array.slice(ii,j).sort((a,b)=>a-b);
        //value.sort((a,b)=>a-b);

        answer.push(value[k-1]);
    }


    return answer;
}

array = [1, 5, 2, 6, 3, 7, 4];
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array,commands));