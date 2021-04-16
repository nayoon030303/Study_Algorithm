function caesar(s, n) {
    var result = "";
    // 함수를 완성하세요.
  var car = ""

  for (var i=0; i<s.length;i++)
  {        
    if ( s[i] == ' ' )
      result += ' '
    else 
        result += String.fromCharCode( (s.charCodeAt(i)>90)?
      (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65 )     
  }

    return result;
}







/*
my code
*/
function solution(s, n) {
    var answer = '';
    answer = [];
    for(var i=0; i<s.length; i++){
        var currnet = s.charCodeAt(i);
        var next = s.charCodeAt(i)+n;

        if(currnet === 32){
            answer+=" ";
        }else{
            if(currnet>=97 && currnet<=122 && next>122){
                next-=26;
            }else if(currnet>=65 && currnet<=90 && next>90){
                next-=26;
            }
            answer+=String.fromCharCode(next);
        }

        console.log(next);
    }
    return answer;
}

var s = "zZyY";
var n= 1;
console.log(solution(s,n));