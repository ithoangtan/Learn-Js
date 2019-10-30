function sum(a, b) {
  const c = a + b;
  //Đáng lẽ c sẽ xóa khỏi bộ nhớ
  //Nhưng closure sẽ thay đổi được biến bên ngoài(biến c)
  return function() {
    console.log(c);
  };
}

sum(1, 2)();

//Ứng dụng trong function factory
//Trong design pattern là factory method

function debug(name) {
  return function(str) {
    console.log(`[${name}] ${str}`);
  };
}

const log = debug("Dog");
//debug("dog") trả về một function và
log("error happend");
