//using for each method
const digits = [6,8,9,3,4];
const g = []
let door = digits.forEach(not);

function not(value,index,array){
   g.push(value*2)
}
console.log(g);
//array map method
const numbers= [6, 4, 7, 10, 5];
let home = numbers.map(gate);

function gate(value, index, array) {
  return value * 3;
}
console.log ("the new array is",home);
//filter method
const x = ["pray","school","sleep","eat","code"];
const j = ["home","phone","feed"];
const f = [true,false ,false,true,false];
let d= 4;
let n = 10;
let c = d<n;
let l= f.filter(key);

function key (value,index,array){
   return value == false
}
console.log("the output is",l);
console.log("the result is ",c);
console.log(x>j);
//array reduce
const number = [40, 6, 17, 15, 45];
let a = number.reduce(rose,100);

function rose(total, value, index, array) {
  return total - value;
}
console.log("the reduce value is",a);
// js reduce Right()
const cars= [40, 4, 30, 5, 35];
let  m = cars.reduceRight(nissan);

function nissan(total, value, index, array) {
  return total - value;
}
console.log("the reduce right is",m);

//array every()
//checks if all array values are larger than 18
const car = [60,20,18,3,30];
let s = car.every(prado);

function prado(value, index, array) {
  return value > 18;
}
console.log("the array every",s);
//array some()
//checks if some array values pass the test,is some are larger than 20
const grow = [40,50,20,16,7,27];
let k = grow.some(apple);

function apple(value, index, array) {
  return value > 20;
}
console.log(k);
//js array from
//returns an Array object from any object with a length property
const house = ["2,43,15,60,2,5"];
let z = Array.from(cup);

function cup(value,index,array){
   return array
}
console.log(house);
//js array keys()
//use for loop
//return the index
const colors = ["Blue", "black", "green", "red"];
let keys = colors.keys();
let b = " ";
for (let v in colors){
   b+= v + " ";
   console.log("keys of",v);
}

//js array entries()
const animals = ["dog","horse","cow","donkey"];
let news = animals.entries();
for (let h of news){
   console.log("this is entries of",h);
}

