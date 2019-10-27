var a = {
  foo: "bar",
  run: function() {
    setTimeout(function() {
      console.log(this.foo);
    }, 1000);
  }
};

a.run(); //undefine:
//this của hàm bên trong không thừa
// kế this của thằng ngoài

//Cách sửa:

var a = {
  foo: "bar",
  run: function() {
    setTimeout(
      function() {
        console.log(this.foo);
      }.bind(this),
      1000
    );
  }
};

var a = {
  foo: "bar",
  run: function() {
    setTimeout(
      function() {
        console.log(this.foo);
      }.bind(a),
      1000
    );
  }
};

var a = {
  foo: "bar",
  run: function() {
    var that = this;
    setTimeout(function() {
      console.log(that.foo);
    }, 1000);
  }
};

var a = {
  foo: "bar",
  run: function() {
    setTimeout(() => {
      console.log(this.foo);
    }, 1000);
  }
};
