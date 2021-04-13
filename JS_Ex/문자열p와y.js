/*
best code
*/
function numPY(s){
    return s.toLowerCase().split("p").length === s.toLowerCase().split("y").length;
}

s = "pPoooyYp";
console.log(numPY(s));

/*
my code
*/
function solution(s){
    var answer = true;
    
    var pc = 0;
    var py = 0;
    s = s.toLowerCase();
    for(var i=0; i<s.length; i++){
        if(s[i] === 'p')
            pc+=1;
        else if(s[i] === 'y')
            py+=1;
    }
    
    console.log(pc,py)
    if(pc !== py)
        return false;

    return answer;
}