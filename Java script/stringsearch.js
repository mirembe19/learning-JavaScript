//js string search methods
//string indexof()
let text = "when i went to the market i was supprised to find frozen fish";
console.log(text.indexOf("i"))
//lastindexof
let goal = "to work harder and be rich";
console.log(text.lastIndexOf("h"))
//search index
//or use (/g/)
let song = "rain rain go away come back another day";
console.log(song.search("g"));
//js string match()
let tell = "the weather is sunny and rainy";
console.log(tell.match("a"));
//match all()
let desk = "i will wait till eight";
console.log(desk.matchAll("wait"));
//string includes()
let rest = "hey there, how are you";
console.log(rest.includes("how"));
console.log(rest.includes("how",12))
//string startswith()
let word = "the sun is yellow and orange sometimes";
console.log(word.startsWith("sun"));
console.log(word.startsWith("the"));
//string ends with()
let words = "It will rain tomorrow";
console.log(words.endsWith("rain"));
console.log(words.endsWith("tomorrow"));
console.log(words.endsWith("tomorrow",23))
console.log(words.length);