//1. deleration
var a = 1;
let b = 2;
const c = 3;
const c; //error

//4 redeleration
var a = 2;
console.log("a =", a); //result: a = 2

let b = 3; //error

//2. hoisting
function run(){
    console.log(a);
    //result clog(a) with:
    var a = 1; //:undefined
    let a = 1; //:a is not defined
    const a = 1; //:a is not defined
}



//3. let and const have block scope
//Với kiểu var thì"
if(true){
    var x = 1;
}
console.log('x =', x);//result: x = 1

for (var i = 0; i< 10; i++){
    console.log('i =', i);
}

console.log('i =', i); //result i = 10;

//Nhưng với let thì:
if(true){
    let x = 1;
}
console.log('x =', x);//error: x is defined

for (let i = 0; i< 10; i++){
    console.log('i =', i);
}

console.log('i =', i); //error i is not defined;


