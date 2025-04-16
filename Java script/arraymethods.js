//array methods
const colors = ["Blue", "Orange", "Aqua", "pink"];
let n = colors.length;
console.log(n);
//array tostring method
const months = ["june","july","may","march"];
console.log(months.toString());
//array at()
const girls =["zoe","kuki","abby","cindy"];
console.log(girls.at(3))
//array join
const boys = ["elijah","sharif","jay","boy"];
console.log(boys.join("="));
//js pop
const x = [ "yz","gd","fk","dj"];
console.log(x.pop());
//js array push()
const men = ["tall","short","brown","black"];
men.push("stingy");
console.log(men)
//array shift()
const women = ["tall","fat","brown","black"];
women.shift();
console.log(women);
//array unshift()
women.unshift("rich")
console.log(women);
//array length
const numbers = [20,69,76,45];
console.log(numbers.length);
//array delete
//use pop or shift instead
//array concat
const rats = ["red","grey","white"];
const cats =["black","orange","green"];
const enemies =rats.concat(cats);
console.log(enemies);
//array copy within
const animals =["dog","hen","fish","lion"];
animals.copyWithin(3,0)
console.log(animals)
const kuki = ["tall","old",20,"black"];
kuki.copyWithin(2,0);
console.log(kuki);
//array flat
const digits =[[4,5,6],[6,7,9],[8,3,6]];
digits.flat();
console.log(digits);
const l = digits.flat();
console.log(l)
//array flatmap
const g = [9,8,6,4,3,7];
let m =g.flatMap(n =>[n,n*2]);
console.log(m)
//array splice(adds objects)
const j = ["zoo","animals","food"];
const a = j.splice(2,1,"egg","sauce");
console.log("the splice j is",a);
const f = ["a","b","c","d"];
const c = f.splice(3,0,"r","s");
console.log (c);
const v = ["door","window","chair","carpet"];
const r = v.splice(1,0,"bed","floor");
console.log(r);
//array slice(removes objects)
const apps = ["netflix","snap","insta","tiktok"];
const apss= apps.slice(3);
console.log(apss);
const shows = ["icarly","henry","danger","thundermans"];
const b = shows.slice(2);
console.log(b);
const food = ["matooke","rice","peas","fish"];
const o = food.slice(0);
console.log(o);
//automatic tostring()
const cars = ['ferari','porche','nissan','volvo'];
const t = cars.toString();
console.log(t);
const que = ["a","b","c","d"];
const z = que.toString();
console.log(z);
const books = ["novel","bible","diaries","hymnal"];
const e = books.toString();
console.log(typeof e);

