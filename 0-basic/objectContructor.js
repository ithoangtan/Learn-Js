var car = {
    name: 'as',
    weight: 0.8,
    run: function () {
        return console.log('run');
    },
}

function Car(price) {
    this.name = 'as';
    this.weight = 0.9
    this.run = function () {
        return console.log('run');
    }
    this.price = price;
}
var myCar = new Car(999);
console.log(myCar);
Car.prototype.runOn = function () {
    console.log('running..............');
}




