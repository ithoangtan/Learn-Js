//call: func.call(this, param1, param2,..)
//apply: func.apply(this, [param1, param2,...])

const cat = {
  name: "Tom",
  age: "10"
};

function greeting2() {
  console.log(`Hi! ${this.name}, age ${this.age}`);
}

greeting2.apply(cat);

function sum() {
  const numbers = Array.from(arguments);
  return numbers.reduce((sum, num) => sum + num, 0);
}

function average() {
    //sum
    //sum/arguments.length
    //Vấn đề là ta không biết sẽ có bao nhiêu tham số
    //Thế nên ta sẽ truyền tất cả các arguments theo dang mảng
    //bằng apply() khi gọi hàm sum
  const x = sum.apply(null, arguments);
  return x / arguments.length;
}
console.log(average(1, 2, 3, 6));
