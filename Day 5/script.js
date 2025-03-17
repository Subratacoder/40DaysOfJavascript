for (let i = 0; i <= 5; i++) {
      let str = ""
   for (let j = 0; j <= i; j++) {
      str += "*"

   }
   
    console.log(str);
    
} 

/* MULLTIPLICATION TABLE */

for (let i = 0; i <= 30; i++) {
      console.log(`${3} x ${i} = ${3 * i}`);
      
}

// SUMMATION OF ALL ODD NUMBER
sum = 0;

for (let i = 1; i <= 500; i++) {
   if (i % 2 == 0) {
      continue;
   }
   sum = sum + i;
   
}
console.log(`Summation of all odd number is = ${sum}`);


for (let i = 0; i <= 20; i++) {
   if (i % 3 == 0) {
   
      continue;
   }
 console.log(i);
   
}

// REVERSE THE GIVEN NUMBER

let num = 123456;
let reverseNum = 0;
while (num > 0) {
   let digit = num % 10 // got last digit
   reverseNum = reverseNum * 10 + digit;
   num = Math.floor(num / 10)
}
console.log(`Reversed Number is ==> ${reverseNum}`);

