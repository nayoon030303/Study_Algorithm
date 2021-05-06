/**
 * 1.사각형의 w와 h가 서로서인 경우 잘린 정사각형의 갯수 w+h-1
 * 2. 사각형에서 서로소 관계의 사각형의 갯수=최대공약수
 * 3. 잘린 정사각형의 개수는 g*((w/g)+(h/g)-1) = w+h-g
 * 4. 서로소: 두 수 사이의 관계가 1이외에 공약수가 없는 수 
 * 5. * w` : 사각형의 가로길이, h` : 사각형의 세로길이
 * 6. 
 */

function getGcd(a,b){
    while(b>0){
        let temp = a%b;
        a = b;
        b = temp;
    }
    return a;
}
function solution(w, h) {
    let gcd = getGcd(w,h); //최대공약수 구하기
    return w*h-(w+h-gcd);
    
}