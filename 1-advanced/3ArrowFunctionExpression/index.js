function sum(a, b) {
  return a + b;
}

sum(1, 2);

var sum2 = function(a, b) {
  return a + b;
};

var sum = (a, b) => {
  return a + b;
};

var sum = (a, b) => a + b;

var sum = a => a * a;

var arr = [1, 2, 3];

arr.map(function(x) {
  return x * x;
});
// 1 tham số thì không cần mở ngoặc luôn
var sum = (a, b) => a + b;
arr.map(x => x * x);


console.log(arr);
