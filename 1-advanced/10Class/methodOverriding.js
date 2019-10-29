class CoffeeMachine {
  makeCoffee() {
    console.log("making coffee....");
  }
}

class SpecialCoffeeMachine extends CoffeeMachine {
  makeCoffee(cb) {
    console.log("making coffee and do some thing.....");
    cb();
  }
}

const coffeeMachine = new SpecialCoffeeMachine();

coffeeMachine.makeCoffee(() => {
  //method được gọi là của SpecialCoffeeMachine
  console.log("call boss");
});
