//rest : phần còn lại....
//Dùng trong không biết số lượng đầu vào

function log(a, ...number) {
  console.log(a);
  console.log(number);
}
//rest là phần còn lại trong trường hợp dưới là 2, 3, 4
// rest là một mảng
//rest khác arguments:
// arguments là một object (array-like) chứ không phải array
log(1, 2, 3, 4);

function sum(...num) {
  return num.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));

function concat(separator, ...strings) {
  return strings.join(separator);
}

console.log(concat(".", "a", "b", "c"));
//kết quả nối tất cả các biến với ký tự đầu tiên truyền vào
