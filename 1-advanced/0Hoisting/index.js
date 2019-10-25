// hoisting

function run() {
  // var x; //khi chạy biến x sẽ được khai báo ở đây và không có giá trị
  console.log(x);

  var x = 10;
}
var x = 5;
// Trong js mọi biến kiểu var trong code sẽ
//được đưa lên đầu tiên

run();
