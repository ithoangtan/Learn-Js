class Animal1 {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("Eating....");
  }
}

class Bird1 extends Animal1 {
  fly() {
    console.log("flying....");
  }
}

const bird1 = new Bird1("ithoangtan");
bird1.fly();
bird1.eat();

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log("Eating...");
};

function Bird(name) {
  Animal.apply(this, arguments);
}

Bird.prototype = new Animal();

const bird = new Bird();
bird.eat();
