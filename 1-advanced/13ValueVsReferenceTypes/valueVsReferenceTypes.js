let a1 = 1;
let a2 = 1;
console.log(a1 === a2); //true

let obj1 = { a: 1 }; //địa chỉ nhà
let obj2 = { a: 1 }; //địa chỉ nhà khác

console.log(obj1 === obj2); //false

//Reference: object, array, function

//Array types: các kiểu còn lại
let a3 = a2;
a3 = 4; //a2 not change

let obj3 = obj2;
obj3.a = 2; //obj2.a = 2 do cùng tham chiếu đến một nơi

let obj4 = obj2;
console.log(obj4 === obj2); //true

obj4.a = 2;
console.log(obj4 === obj2); //true

function log(x) {
  x.b = 5;
}
//Khi truyền vào hàm là một object thì mọi thay đổi trong hàm đều sẽ được lưu lại

