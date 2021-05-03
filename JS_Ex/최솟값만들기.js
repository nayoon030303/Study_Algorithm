function solution(A,B){
    let answer = 0;
    A = A.sort((a,b)=>a-b); //오름차순 정렬
    B = B.sort((a,b)=>b-a); //내림차순 정렬
    //console.log(A);
    //console.log(B);
    for(var i=0; i<A.length; i++){
        answer+=(A[i]*B[i]);
    }
    return answer;
}