/*
1-1.my code
*/

function solution(arr1, arr2) {
    var answer = [];
    var an = [];
    for(var i=0 ; i<arr1.length; i++){
        for(var j=0; j<arr1[i].length; j++){
            an.push(arr1[i][j]+arr2[i][j])
        }
        answer.push(an);
        an = [];
       
    }
    return answer;
}
var a = 'a';
a.toUpperCase;
/*
1-2.my code
*/
function solution(arr1, arr2) {
    var answer = [];
    
    for(var i=0 ; i<arr1.length; i++){
        answer[i] = [];
        for(var j=0; j<arr1[i].length; j++){
            answer[i][j] = arr1[i][j]+arr2[i][j]
          
        }
    
       
    }
    return answer;
}