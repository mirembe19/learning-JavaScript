//length property
const colors = ["red", "blue", "yellow", "Maroon"];
console.log(colors.length);
//sort property
const numbers = [ 30,56,23,80,12];
console.log(numbers.sort())
//array loop
const fruits = ["apple","banana","grapes","mango"];
let nn = fruits.length;
let v = " "
 
for (let i = 0; i < nn; i++) {
  v += i + " " + fruits[i] + " ";

console.log(i + " " + fruits[i]);
console.log(i);
console.log(v);
}


//dry principle...do not repeat yourself