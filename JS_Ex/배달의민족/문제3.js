function solution(prices) {
    var answer = [];
    var updown = [];

    for(var i=1; i<prices.length-1; i++){
        if(prices[i]>prices[i-1] && prices[i]>prices[i+1]){
            updown.push(i);
        }else if(prices[i]<prices[i-1] && prices[i]<prices[i+1]){
            updown.push(i*-1);
        }
    }
    console.log(updown);
    var temp = [0,0];
    for(let i=0; i<updown.length; i++){
        temp[0] = prices[updown[i]];
        temp[1] = prices[updown[i]];
        var t = updown[i]; //왼쪽으로
        var tt = updown[i]; // 오른쪽으로
        if(temp[0]>0){
            while(true){
                var flag = false;
                if(t<0 || t>=prices.length-1)break;
                if(prices[t-1]<=temp[0]){
                    flag = false;
                }else{
                    temp[0] = prices[t-1];
                    t-=1;
                }
                if(prices[tt+1]<=temp[1]){
                    flag = false;
                }else{
                    temp[0] = prices[tt-1];
                    tt+=1;
                }
                if(flag) break;
            }
            console.log(temp[0],temp[1]);
        }
    }
    return answer;
}

let prices = [12,6,6,12,6,24,30,32,34,36,24,18,6,6,18,30,6];
console.log(solution(prices));

