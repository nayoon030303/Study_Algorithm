/*
my code
비효울적+error
*/
function solution(files) {
    //var split_file = [];
   var head = [];
   var number = [];
   
   for(var i=0; i<files.length; i++){
       var file = files[i];
       var k=0;
       while(true){
           if(!isNaN(file[k])){break;}
           k+=1;
       }
       //split_file.push([file.substring(0,k),file.replace(/[^0-9]/g,"")]);
       head.push(file.substring(0,k));
       number.push(file.replace(/[^0-9]/g,""));        
   }
  
   for(var i=0; i<head.length-1; i++){
       for(var j=i+1; j<head.length; j++){
           if(head[i].toLowerCase() > head[j].toLowerCase()){
               var temp = head[i];
               head[i] = head[j];
               head[j] = temp;
               
               temp = files[i];
               files[i] = files[j];
               files[j] = temp;
           }
       }
   }
      
   for(var i=0; i<number.length-1; i++){
       for(var j=i+1; j<number.length; j++){
         if(head[i].toLowerCase() === head[j].toLowerCase()){
               if(Number(number[i]) > Number(number[j])){
               var temp = number[i];
               number[i] = number[j];
               number[j] = temp;
               
               temp = files[i];
               files[i] = files[j];
               files[j] = temp;
           }
         }
       }
   }
   //console.log(files);
   return files;
}

var f = ["img000012345", "img1.png","img2","IMG02"];
//console.log(solution(f));

/*
other code
*/

function solution1(files){
    return files.sort((a,b)=>{

        //^는 입력의 시작 부분에 대응
        // \D는 숫자가 아닌 문자에 대응
        // +앞의 표현식이 1회 이상 연속으로 반복되는 부분에 대응
        const headerA = a.match(/^\D+/)[0].toLowerCase();
        const headerB = b.match(/^\D+/)[0].toLowerCase();
        //console.log(headerA,headerB);

        if(headerA>headerB){
            return 1;
        }else if(headerA<headerB){
            return -1;
        }

        //\d는 숫자에 대응
        const numberA = a.match(/\d+/)[0].replace(/^0+/,""); //앞의 0을 제거
        const numberB = b.match(/\d+/)[0].replace(/^0+/,"");
        
        return numberA-numberB;
    });
}

var f = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
console.log(solution1(f));
