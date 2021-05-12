function solution(skill, skill_trees) {
    var answer = 0;
    var temp = []; 
    for(let i=0; i<skill_trees.length; i++){
        var t = '';
        for(let j=0; j<skill_trees[i].length; j++){
            if(skill.includes(skill_trees[i][j])){ //skill에 들어있는 것만 
                t+=skill_trees[i][j];  
            }
        }
        temp.push(t);
    }

    for(let i=0; i<temp.length; i++){
       if(temp[i]===skill.slice(0,temp[i].length)){
           answer+=1;
       }
    }
   
    return answer;
}
/**
 * 코드가 간결하나 
 * 내 코드보다 속도는 조금 느리다
 */
function solution1(skill, skill_trees) {
    var answer = 0;
    //정규식에 문자열 변수 넣기 객체를 생성해서
    //^의 의미: 부정!
    var regex = new RegExp(`[^${skill}]`, 'g');
    //console.log(regex);
    return skill_trees
        .map((x) => x.replace(regex, ''))
        .filter((x)=>{
            //x의 indexOf가 0이고
            //x===""이라면: 순서 상관없는 스킬들만 선택했을 때
            return skill.indexOf(x) ===0 || x==="";
        }).length;
       
}

let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
console.log(solution1(skill, skill_trees));