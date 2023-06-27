console.log("This is Tutorial 53 js script");

function greet(nam, greetext = " Greeting from JS") {
  let name1 = "Name2";
  console.log(nam + " " + greetext);
}

function sum(a,b,v){
    let d = a+ b+v;
    return d
}

let name = "Harry";
let name1 = "Shubham";  
let name2 = "Vatsal";
let name3 = "Rudra";
let Greetext = "Good Morning.";

greet(name, Greetext);
greet(name1);
greet(name2, Greetext);
greet(name3, Greetext);

// let returnval = greet(name1);
// console.log(returnval)

let returnval = sum(1,5,4);
console.log(returnval)