//js BigInt
//used to store big integer values that are too big to be represented by a normal Js Number.
//integers add to 15,to make bigint add "n" or call BigInt()
let a = 23456891234567;
let b = BigInt(23456891234567);
console.log(b)
//data type 
let w = 7687145321987645;
let t = typeof w;
console.log (t);
//bigint operators
let k = 675890754343215n;
let m = 654897765432567n;
console.log(k*m);
let eli = 675890754343213n;
let moon= 654897765432568n;
console.log( eli/moon);
// decimals
let room = 20n;
let go = Number(room)/ 13;
console.log(go);
//number is  safe integer
let fc = 60n;
console.log(Number.isSafeInteger(60));
console.log(Number.isSafeInteger(609875543127896543276));
 