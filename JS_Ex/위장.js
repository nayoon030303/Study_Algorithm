/*
*my code
*잘못된 풀이 
*combinations을 이용하여 하의만 입을때, 상의만 입을때, 둘다 입을때 경우의 수를 구한다
*시간초과가 일어난다.
*/
function solution(clothes) {
    
    let clothes_list = [];   
    
    //의상 종류 구하기
    while(clothes.length>0){
        let cur_len = clothes.length;
        let current = clothes[0][1];
        clothes=clothes.filter((v)=>v[1]!==current);
        let last_len = clothes.length;
        clothes_list.push(cur_len-last_len);
        //console.log(cur_len-last_len);
    }

    //console.log(clothes_list);
    
    
    let getCombinations = function(clothes_list,n){
        const results = [];
        if(n===1)return clothes_list.map((v)=>[v]); //1개씩 택할 때, 모든 배열의 원소 return

        clothes_list.forEach((fixed,index,origin)=>{
            const rest = origin.slice(index+1); //해당하는 fixed를 제외한 나머지 뒤
            const combinations = getCombinations(rest,n-1); //나머지에 대해서 조합을 구한다.
            const attached = combinations.map((v)=>[fixed,...v]); //돌아온 조합에 떼 놓은(fixed) 값 붙이기          
            results.push(...attached); //배열 spread syntax 로 모두다 push
           
        });
        return results;
    }

    //조합구하기
    var sum =0 ;
    for(let i=1; i<=clothes_list.length; i++){
       
        sum+= getCombinations(clothes_list,i).map((v,idx)=>v.reduce((acc,cur)=>acc*cur)).reduce((acc,cur)=>acc+cur);
        
    }

    //console.log(sum);
    return sum;
}

const clothes = [
    ["a", "a"],
    ["b", "b"],
    ["c", "c"]
    ];

console.log(solution(clothes));


/*
 *해결 코드
 *안입는 경우를 포합시킨다.
 *
 */
 function solution(clothes) {
    
    let clothes_list = [];   
    
    //의상 종류 구하기
    while(clothes.length>0){
        let cur_len = clothes.length;
        let current = clothes[0][1];
        clothes=clothes.filter((v)=>v[1]!==current);
        let last_len = clothes.length;
        //안입는 경우의 수 +1을 더하기
        clothes_list.push(cur_len-last_len+1);
    }

    //아무것도 입지않는 경우 -1빼기
    return clothes_list.reduce((acc,cur)=>acc*cur)-1;
    
}
