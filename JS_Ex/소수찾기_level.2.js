function solution(numbers) {

    let num = [...numbers]

    // 순열 통해 경우의 수 구하기
    const permutation = (arr, selectNum) =>{
        let result = [];
        if(selectNum === 1) return arr.map((v)=> [v]);

        arr.forEach((v,idx,arr)=>{
            const fixer = v;
            const restArr = arr.filter((val, index)=> index !== idx); //v를 제외한 배열 만들기
            const permuArr = permutation(restArr, selectNum-1);
            const combineFixer = permuArr.map((v)=> fixer + v);
            result.push(...combineFixer);
        })
        return result
    }
    
    // 소수 판별
    const checkPrime = (num)=>{
        let start = 2;
        while (start <= Math.sqrt(num)) {
            if (num % start++ < 1) {//num%start ===0
                return false;
            }
        }
        return num > 1; //num이1보다 크다면 return true
    }

    let answer = []

    for(let i = 1; i <= num.length; i++){
        permutation(num, i).forEach( v=>{
            checkPrime(parseInt(v)) ?  answer.push(parseInt(v)) : answer
        })
        
    }

    //...전개 연산자
    console.log([...new Set(answer)]) //set을 배열로 변환
    return [...new Set(answer)].length

}

solution('011')