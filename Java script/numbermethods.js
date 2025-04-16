//js number methods
// to string method
let r = 600;
console.log(r.toString(6));
//to exponential method
let x = 4.7564;
console.log(x.toExponential());
console.log(x.toExponential(2));
console.log(x.toExponential(4));
console.log(x.toExponential(6));
//to fixed method
let y = 2.7777;
console.log(y.toFixed(0));
console.log(y.toFixed(2));
console.log(y.toFixed(4));
console.log(y.toFixed(6));
//to precision method
//values from 1 to 100, no negatives and 0
let g = 4.66656;
console.log(g.toPrecision(1));
console.log(g.toPrecision(2));
console.log(g.toPrecision(4));
console.log(g.toPrecision(6));
//the value method
let f = 554;
console.log(f.valueOf(5));
