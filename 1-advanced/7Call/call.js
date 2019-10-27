function greeting(name, age) {
  console.log(`Hi! ${name}, age ${age}`);
}

greeting.call(null, "Tom", 9);

const cat = {
  name: "Tom",
  age: "10"
};

function greeting2() {
  console.log(`Hi! ${this.name}, age ${this.age}`);
}

greeting2.call(cat);
