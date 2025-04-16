    let g ="i love going to church'sda church'"
    console.log(g)
    let x =6
    let f =6
    console.log(x==f)
    let m=true
    let r =false
    console.log(m);
    //this is an array
    let cars =["jeep","prado","nissan"];
    //array with all data types
    let y =[30,"toyota",50,false,34.99];
    console.log(y)
    //this is an object with subjects
let k ={
    math:90,
    english:100,
    biology:80,
    history:75,
    physics:60,
    chemistry:50
}
console.log(k)
console.log(k.math)
console.log(k.english);
console.log(k.biology);
console.log(k.history);
console.log(k.physics);
console.log(k.chemistry);


function home () {
    console.log("going home")
    return"my home is faraway"
}
console.log(home());
function bed (){
    console.log("bed")
}
console.log (bed()) 

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(100)
  console.log(value)
//grams to kilograms
  function tokilograms(grams){
    return grams/1000;
  }
  let result =tokilograms(10000)
  console.log(result);

  //distance covered
  function distance(speed,time){
    return speed *time
  }
  let answer =distance(3,5);
  console.log(answer)

  //javascript objects
  let patient={gender:"female", shape:"square", race: "white", eyecolor:"brown", condition:"stable"};
  console.log(patient.shape);
  console.log(patient.eyecolor);
  console.log(patient.race);
  console.log(patient.gender);
  console.log(patient.condition);

  //the object
  let address={}
  //added variables
  address.kuky="wakiso";
  address.sharif="kayunga";
  address.esther="USA"
  console.log(address)

   let me=["mirembe",19];
 let her=["nancy",51];
 console.log(me);
 console.log(her)

 //about me 
 let myself={
  firstname: "esthe",
  lastname:"miremb" ,
  yearofbirth: 2006,
  today :2025,

  currentage : function(){
    return this.yearofbirth - this.today;
  }
 }
 console.log(myself.currentage())


 const n =7;
 n=10
 
 //remove n values
 const v ={age: "ten"}
 v.age ="three"
 console.log(v)
  
 