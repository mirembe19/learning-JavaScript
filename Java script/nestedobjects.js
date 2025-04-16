object={
    name:"Mirembe",
    home:"Uganda",
    age:19,
    homeaddress:{
        home1:"Kayunga",
        home2:"village",
        home3:"Heaven",
        home4:"none"
    }
}
console.log(object.homeaddress.home2)


const person ={
    firstname :"Deborah",
    secondname:"Kalungi",
    occupation:"Programmer",

    fullname:function(){
        return this.firstname + this.secondname
    }
}
console.log(person.fullname())

const industry ={
    name:"kuky",
    manufuctureditem:"cake"
}
industry.location =function() {
    return "located in kampala"
}
console.log(industry);
console.log(industry.location())

const man = {

    name: "John",
  
    age: 30,
  
    city: "New York"
  
  };
  console.log(man['name'])
  //for the loop
  for(let y in man){
    console.log(man[y]);
    


  }


  const school ={
    schoolid:256782,
    schoolname:"kampala ss",
    location:"towncentre"


  }
  
  
  for (let m in school){
console.log(m)
console.log(school[m])
  }
  console.log(school["schoolname"])
  console.log(school["location"]);
  // Create an Object

const human = {

    name: "John",
  
    age: 30,
  
    city: "New York"
  
  };
  // Build a Text
  
  let text = "";
  
  for (let x in human) {
  
    text += human[x] + " ";
  console.log(text)
  };
  
  
  function Cars(mycar,hiscar,hercar){
   console.log(mycar + hiscar + hercar) ;
  }
  Cars("jeep","bmw","tesla")
  
  function lady(first ,last, age, home){
    this.firstname =first;
    this.lastname =last;
    this.age =age;
    this.homearea =home;
  }
  let esther =new lady("jane", "Doe", 40, "USA");
  console.log(esther)

  let regina =new lady("kuky", "Eliz", 20, "Kayunga");
  console.log(regina)

  let mother =new lady("Nancy", "Mpoza", 51, "Ntinda");
  console.log(mother)

  function Motoka(engine, color, model){
  this.enginetype=engine;
  this.greencar=color;
  this.carmodel=model;
}
let jo =new Motoka("horsepower", "green", "ferari");
console.log(jo)


let way =new Motoka("strong", "pink", "nissan");
console.log(way)

let rat =new Motoka("weak", "blue", "truck");
console.log(rat)

function Girl(first, last, age, school)  {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.schoolname = school;
  this.height = 44;
  this.fullname = function(){
    return this.firstname + this.lastname;
  }
}
let eliz =new Girl("trina","joe", 10, "hillsinternational");
console.log(eliz.firstname);
console.log(eliz.lastname);
console.log(eliz.age);
console.log(eliz.schoolname);
console.log(eliz.height);
console.log(eliz.fullname());

eliz.eyecolor = "blue";
console.log(eliz.eyecolor);

Girl.prototype.weight = 50
console.log(Girl.prototype.weight);

let rose = new Girl("jane","shan", 12, "greenhill");
console.log(rose.weight);
console.log(rose.firstname);
console.log(rose.lastname);
console.log(rose.age);
console.log(rose.schoolname);
console.log(rose.height);
  
  
  
  
  
  