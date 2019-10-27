const names = ["Thanh", "Trang", "Thuỷ"];

for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}

const object = {
  0: "Thanh",
  1: "Trang",
  2: "Thủy",
  lenght: 3
};

for (let index = 0; index < object.length; index++) {
  console.log(object[index]);
}

function sum(a, b, c) {
  return a + b + c;
}

function sum1() {
  let result = 0;
  for (let index = 0; index < arguments.length; index++) {
    result += arguments[index];
  }
  return result;
}

console.log("sum1:", sum1(1, 2, 3, 4, 5));

function sum2() {
  const numbers = Array.from(arguments);
  return numbers.reduce(function(sum, num) {
    return sum + num;
  }, 0);
}

console.log("sum2:", sum2(1, 2, 3, 4, 5));
