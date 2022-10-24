let term1 = 1;
let term2 = 2;
let sum = 2;
let term3 = 0;
while ((term1+term2) <= 4000000){  
  term3=term2+term1;
  term1=term2;
  term2=term3;
  if (term3 % 2 ==0){
      sum = sum + term3;
  }
}
console.log(sum);
