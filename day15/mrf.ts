const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result111 = numbers
  .filter(num => num % 2 === 0)  
  .map(num => num * 2)          
  .reduce((sum, num) => sum + num, 0); 

console.log(result111); 
