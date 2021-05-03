/**
 * 후보키 문제 너무 어려움
 * 오류 코드 
 */
function getCombinations (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

      arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]); 
        results.push(...attached); // 배열 spread syntax 로 모두다 push
      });

        return results; // 결과 담긴 results return
}

function solution(relation) {
    
    var answer = 0;
    var key_list = [];
    var combination = [];

  
    //중복 검사하기
    const check = function(arr,key){
        //최소성 체크
        for(var i=0; i<key.length; i++){
            for(var j=0; j<key_list.length; j++){
                //console.log(key[i],key_list[j]);
                if(key[i]===key_list[j]){                   
                    return 0;
                }
            }
        }
        
        //유일성 체크
        //키로 사용했을 떄 하나라도 중복되면 x   
       
        var start =[];
        for(var i=0; i<relation.length; i++){ 
            var an = [];
            for(var j=0; j<key.length; j++){                   
                an.push(relation[i][key[j]]);
            }
            
            for(var k =0; k<start.length; k++){
                 if(JSON.stringify(start[k]) === JSON.stringify(an)){
                    //console.log(start[k],an);
                    return 0;
                }
            }         
            start.push(an); 
       }
        //console.log('중복없슴');
        answer++;
        key_list.push(...key);
      
    }
    
    var list =[];
    for(var i=0; i<relation[0].length; i++){
        list.push(i);
    }
    //모든 조합구하기
    for(var i=1; i<=list.length; i++){
        combination.push(...(getCombinations(list,i)));
    }
    //check(relation,[0]);
    //check(relation,[2,3]);
    
    for(var i=0; i<combination.length; i++){
        check(relation,combination[i]);
    }
    
    console.log(key_list);
    return answer;
}

/**
 * 다른 사람의 코드
 * 
 */

 function solution(relation) {
    const cols = relation[0].length
    const rows = relation.length
    const sets = 1 << cols
    const sk = new Set()

    for (let i=1; i<sets; i++) {
        const tmp = new Set()
        for (let row=0; row<rows; row++) {
            let key = ''
            for (let col=0; col<cols; col++) {
                if (i & (1 << col)) key = String(key) + String(relation[row][col])
            }
            tmp.add(key)
        }
        if (tmp.size === rows) sk.add(i)
    }

    for (let i of sk) {
        for (let j of sk) {
            if (i >= j) continue
            if ((i & j) === i) sk.delete(j)
        }
    }

    console.log(Array.from(sk).map(e => e.toString(2)))

    return sk.size
}

/**
 * 다른 사람 코드 2
 * 
 */
 function solution(relation) {
    let answer = 0;
    let attrNum = relation[0].length;
    let combList = [];
    let keyList = [];
    // 조합 배열 생성
    for (let i=1; i<=attrNum; i++){
        comb(combList, [], 0, attrNum, i, 0);
    }
    // 각 조합에 따라 후보 키가 가능한지 체크하고 추가
    for (let i=0; i<combList.length; i++){
        addKey(keyList, combList[i],relation);
    }
    console.log(keyList);
    return keyList.length;
}
function addKey(keyList, key, relation){
    // 최소성 체크
    // 이미 등록된 후보키의 배열을 포함하는 배열이 하나라도 존재하면 최소성 X
    let isMin = true;
    for (let i=0; i<keyList.length; i++){
        let prevKey = keyList[i]; //[0] 등록된 후보키
        for (let j=0; j<key.length; j++){//[0,1]
            prevKey = prevKey.filter(v=> v !==key[j]);//등록된 후보키를 하나라도 포함하면 X
        }
        if(prevKey.length === 0){ 
            //console.log(keyList[i],key)
            isMin = false;
        }
    }
    // 등록한 후보키가 하나도 없으면 최소성이 항상 만족되므로 패스
    if (keyList.length !==0 && !isMin){
        return;
    }
    let arr = [];
    let isUnique = true;
    // 유일성 체크
    // 키로 사용했을 때 하나라도 중복되면 유일성 X
    for (let i=0; i< relation.length; i++){                
        let findEle = arr.find(v => { //중복이 있을 때 만 값을 뱉는다
            let flag = true;
            for (let j=0; j< key.length; j++){//[ 2 ]
                //relation[1][2] 와 v[2](relation[0~1][2])와 비교 다 같으면 findEle에 v[key[j]]값을 return 
                if (v[key[j]] !== relation[i][key[j]]){ //다르면 false로 false이면 값을 반환하지 않는듯
                    flag = false;
                }
                    
            }
            return flag;
        });
         console.log(findEle)
        if (findEle !== undefined){
            //console.log(findEle,key,i)
            isUnique = false;
        }else{
            arr.push(relation[i]);  
        }
    }
    // 유일성 만족하면 후보키로 등록
    if(isUnique){
        keyList.push(key);
    }
   
}
// 조합 배열 생성
function comb(list, arr, idx, n, r, target){
    if (r===0){
        list.push(Object.assign([], arr));
    }else if (target === n){
        return ;
    }else{
        arr[idx] = target;
        comb(list, arr, idx + 1, n, r - 1, target + 1);
        comb(list, arr, idx, n, r, target + 1);
    }
}