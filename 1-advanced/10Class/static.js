class Foo {
  static someMethod() {
    console.log("some method");
  }
  anotherMethod() {
    console.log("another method");
  }
}

Foo.someMethod();

//method static sẽ được gọi từ chính class thay vì instance của class Foo

function Foo() {}

Foo.prototype.anotherMethod = function() {};

Foo.someMethod = function() {};

//Dùng khi không cần khởi tạo mà vẫn dùng được function đó