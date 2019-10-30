//Áp dụng cho array, object
const arr = [10, 20, 30, 40, 50];

// const [a, b, c, d, e] = arr;
// const [a, , , , e] = arr;

// console.log(arr);
// console.log([a, , , , e]);

const arr1 = [10, 20, 30];

const [a1, , , d1 = 10] = arr1;
console.log(arr);
console.log([a1, , , d1]);

const obj = {
  a1: 1,
  b1: 2,
  c1: 3
};

const { a1: x, b1: y, c1: z } = obj;
console.log(x, y, z);
const obj2 = {
  a: 1,
  b: 2,
  c: 3
};
const { a, ...c } = obj2;
console.log(a, c); // 1 {b:2, c:3}
