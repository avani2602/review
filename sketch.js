var name = "Avani";
var UC = "AVANI"

function setup(){
  createCanvas(800,500);

  console.log(name);
  console.log(name.length);
  console.log(typeof(name));
  console.log(name.toUpperCase());
  console.log(UC.toLowerCase());
  console.log("av"+"ani");
  console.log(1/0);
  console.log(7-3);
  console.log("av"*"ani");
  console.log(134 % 60);
  console.log(3 > 5);
  console.log(3===3);
  if(3 > 2){
    console.log("happy");
  }else{
    console.log("not Happy");
  }
  var sea = "high tide"
  switch(sea){
    case "high tide": console.log("ships beware");
    break;
    case "low tide": console.log("safe to sale");
    break;
    default:
    break;
  }
  for(var i = 0; i < 21; i = i + 5){
    console.log(i);
  }
  var n = 0
  while(n < 21){
    console.log(n);
    n += 5;
  }
  console.log(circumference(14));
} 

function circumference(radius){
  c = 2*3.14*radius;
  return(c);
}