let nos = [1,2,3,4,5];
//shift method 
let fno = nos.shift();
console.log("array after shift:",nos);
console.log("the number that got shifted:",fno);
//unshift
nos.unshift(10);
console.log("array after unshift:",nos);
let nums = [1,2,3,4,5];
nums.splice(1,4);
console.log("array after splice insertion",nums);
nums.splice(2,0,10);//indexno,no of elements to replace
console.log("array after splice insertion:",nums);



