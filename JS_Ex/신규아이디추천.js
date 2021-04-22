function solution(new_id) {
    var answer = '';
    var check_eng = /[a-zA-Z]/;
    var allow =['-','_','.']
    new_id = new_id.toLowerCase().split('').filter((content)=>{
        if((!isNaN(content)) || check_eng.test(content) || allow.includes(content)){
            return content;
        }
    });
    for(var i=0; i<new_id.length-1; i++){
        if(new_id[i] === new_id[i+1] && new_id[i]==='.'){
            new_id.splice(i,1);
            i=-1;
        }
    }
    while(new_id[0]=='.' || new_id[new_id.length-1]==='.'){
        if(new_id[0]==='.') new_id.splice(0,1);
        if(new_id[new_id.length-1]==='.')new_id.splice(new_id.length-1,1);
    }
    if(new_id.length<=0){
        new_id.push('a');
    }
    if(new_id.length>=16){
        new_id = new_id.slice(0,15);
    }else if(new_id.length<=2){
        var num = new_id[new_id.length-1];
        while(new_id.length<=2){
            new_id.push(num);
        }
    }
    while(new_id[new_id.length-1]==='.'){
        new_id.splice(new_id.length-1,1);
    }
    new_id=new_id.join('');
    //console.log(new_id);
    return new_id;
}