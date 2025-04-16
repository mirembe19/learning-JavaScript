//index of
const apps = ["netflix", "snap", "insta", "tiktok"];
const v = (apps.indexOf("snap"));
console.log("this is index of", v);
const names = ["esther", "mirembe", "kuki", "sharif"];
//last index of
const c = (names.lastIndexOf("kuki"));
//includes
const f = (names.includes("esther"));
console.log("this is includes of", f);
console.log("last indexof kuki is", c);
//array find()
const ages = [8, 7, 19, 24, 30];
const r = (ages.find(esther));
function esther(value, index, array) {
    return value > 19
}
console.log("this is find", r);
//find index()
const digits = [4, 9, 16, 25, 29];
const y = (digits.findIndex(me));
function me(value, index, array) {
    return value > 18
}
console.log("this is find index", y)
//find last()method
const number = [21, 30, 40, 25, 50, 35, 20];
const z = number.findLast(j => j > 30);
console.log("this is find last", z);
//find last index() method
const numbers = [14, 16, 20, 31, 50, 57, 35];
const h = numbers.findLastIndex(jay);
function jay(value,index,array){
    return value>50
}
console.log('this is find lastindex', h);
//example
const choco = ["white", "black", "dark", "brown", "green"]


let results = choco.find(myFunction)

function myFunction(value, index, array) {

    return (value.length> 2 );

}
console.log(results)
//sort
const fruits = ["kiwi", "Orange", "banana", "apple"];
console.log(fruits.sort());
//reverse
const name =["trish","Debbie","shakira","elijah"];
console.log(name.reverse());
//to sorted()
const animals =["lion","giraffe","monkey","tiger"];
//tiger.tosorted();
console.log(animals.toSorted());
//to reversed
const food= ["bread","chicken","beef","rice"];
console.log(food.toReversed());
const numberr = ["3","15","6","8","2"];
console.log(numberr.sort())
//sorting with a callback functions
const set =[60,48,30,25,5,200];
 let ball = set.sort(sorting)
 function sorting(x,y){
    return(y-x)
 }
console.log(ball);
//sorting in array random 
const zoo= [446520, 676990, 305570];
const luckiestperson= zoo.sort(me);
function person (me) {
   return 0.5 - me.random() 
};
console.log(zoo);
//math.floormethod
let k = 4.7;
console.log(Math.floor(k));
//math.random
const g = [4,8,90,76,5];
console.log(Math.random(g));
//
const points = [40, 100, 1, 5, 25, 10];
  let j = (Math.random() * (5+1));
  console.log(j);
  let d = Math.floor(j);
  console.log(d)
  //fisheryates method
  const a= [50, 30, 2, 3, 15, 40];

for (let i = points.length -1; i > 0; i--) {
  let m = Math.floor(Math.random() * (i+1));
  let l = points[i];
  points[i] = points[m];
  points[m] = l;
}
//finding min and max with sort
const money = [40,50,76,58,31,10];
let home = Math.max.apply(null,money);

  console.log("the max number is",home);
  let  e = Math.min.apply(null,money);
  console.log("the min number is ",e);
//let most = money.sort(cash);
//function cash (y,z){
 // return y-z;
//};
//console.log("the most money is",money[money.length-1]);
//console.log("the least money is",money[0]);
const place = ["house",40
  ,"tree",30,20,"win"

];
