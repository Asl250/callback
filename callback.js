function Salomlashish(text) {
    console.log(text);
}
Salomlashish("Salom");
// 1


function caalback1(name, callback){
    console.log(`Salom ${name}`);
    callback();
}
function callback(){
    console.log("Callback function ishladi");
}
// 2



function greet() {
  console.log("Salom dunyo");
}

function sayName(name="Jacob") {
  setTimeout(function greet(){
  }, 2000);
}
sayName("Jacob");
//3


