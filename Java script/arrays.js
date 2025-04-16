const tres = ["pine,", "figs", "eucalyptus"];
console.log(tres);

const trees = [];
trees[0] = "acacia";
trees[1] = "palm";
trees[2] = "mahogany";
console.log(trees);

//new array
const cars = new Array("jeep", "nissan", "rangerover" , "prado");
console.log(cars.toString());
//accessing array elements
console.log("the item at index 3 is", cars[2]);
console.log("the item at index 1 is",cars[1]);
//changing an array element
cars[3] = "BMW";
console.log(cars.toString());
//converting array to string
console.log(cars.toString());
//type of....
console.log(typeof cars);

//array elements as objects
const x = [];
x [0] = "Firstname";
x [1] = 20,30;
x [2] = {me: "esther"};
console.log(x);
//array properties and methods

//length property
const colors = ["red", "blue", "yellow", "Maroon"];
console.log(colors.length);
//accessing first and last array elements
//first 
const girls = ["kuki", "zoe", "ella", "crystal"];
console.log(girls[0]);
//last
console.log(girls[girls.length -1]);
//looping array elements
//adding array elements
//use the push method
const fruits = ["apple","banana", "grapes"];
console.log(fruits.push("kiwi"));
//can also be added using the length property

//accosiate arrays
const girl = [];
girl[0] = "mirembe";
girl[1] = "esther";
girl[2] = 19;
console.log(girl.length);   
console.log(girl[0]);  
//how to recognise an array
const dress = ["long", "short", "round", "straight"];
console.log(typeof dress);
//returns this as an object
//to return an array, do this instead
console.log(Array.isArray(dress));
//output wll be array
//or use (dress instanceof array)

//nested arrays and objects
//nested array
const fish = ["salmon","tilapia", "perch",["shark","catfish","starfish"]];
console.log(fish[3][2]);
const boys = ['elijah','suubi','']
