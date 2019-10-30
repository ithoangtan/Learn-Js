//shallow-cloning: chỉ clone 1 level
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: { e: 10 }
};
//cloning:
let obj2 = {};

for (let key in obj1) {
  obj2[key] = obj1[key];
}

obj2.a = 999;
obj2.d.e = 11;
console.log({ obj1, obj2 });

// Cách 2
let obj3 = {
  ...obj1,
  z: 100
};
obj3.d.e = 111;

console.log({ obj3, obj2 });
//Deep-cloning:
