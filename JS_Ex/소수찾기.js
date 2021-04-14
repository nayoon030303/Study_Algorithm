/*
other code
*/
function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
   
    s.delete(1);
    s.add(2);
    console.log(Math.sqrt(n));
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}

n = 10
console.log(solution(n));

/*
my code
*/
function solution1(n) {
    var answer = 0;
    
    var primeArray = []
    primeArray.length = n+1;
    primeArray.fill(true);
    
    for(var i=2; i<=n; i++){
        if(primeArray[i]){
            for(var j =i*i; j<=n; j+=i){
                primeArray[j] = false;
            }
        }
    }
    
    for(var i=2; i<=n; i++){
        if(primeArray[i]){
            //console.log(i)
            answer+=1;
        }
    }
    
    
    
    return answer;
}