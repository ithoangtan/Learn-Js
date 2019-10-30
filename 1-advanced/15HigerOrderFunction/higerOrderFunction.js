function waitAndRun(ms, func) {
  setTimeout(ms, func);
}
function run() {
  console.log("Run");
}
waitAndRun(run,2000);
//Giúp chia nhỏ hàm, clean code
//Giải phóng bộ nhớ chạy hiệu quả hơn
