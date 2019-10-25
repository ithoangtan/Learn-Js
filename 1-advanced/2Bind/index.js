//global context
//function context
//bind

var mouse = {
  name: "Mickey",
  sayHi: function() {
    console.log("Hi, ", this.name);
  }
};

mouse.sayHi(); //
/* Context of sayHi() là mouse,
 * và biến this bên trong sayHi() trỏ đến mouse
 */

var say = mouse.sayHi;
say();
/* Conetext của say() là một global context
 * và this.name trong hàm sayHi chưa được difine
 * result sẽ là undefined (biến var)
*/

/* For a given function, creates a bound function
 * that has the same body as the original function.
 * The this object of the bound function is associated
 * with the specified object,
 * and has the specified initial parameters.
 */
var say = mouse.sayHi.bind(mouse);
//Lúc này câu lệnh console.log("Hi, ", this.name);
//Biến this chính là mouse
say();
//Conetext của say() là mouse context

var cat = {
  name: "cat"
};

var say = mouse.sayHi.bind(cat);
//Lúc này câu lệnh console.log("Hi, ", this.name);
//Biến this chính là cat


