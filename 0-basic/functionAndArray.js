//Define 
function nameFunction(params) {
    //my code
    return params;
}

//Execute/Call
nameFunction(6996);

var myObject = {
    name: "car",
    like: 9,
    run: function () {
        console.log('running');
        //Thực chất là hàm này return undefined
    }
};

var myAraay = [1, 2, 3, 4, 5];

for (var i = 0; i < 10; i++) {
    //code
}
for (var student of students) {
    //student code
}

//Lặp qua các key trong object
for (var key in myObject) {
    console.log(key, myObject[key]);
}

var coffeeShop = {
    makingCoffee: function (onFinishFunction) {
        console.log("making cf...");
        onFinishFunction();
    }
};

//Cách 1 tạo trước rồi truyền vào
okCoffeeFuntion = function () {
    console.log("Coffee OK");
};
coffeeShop.makingCoffee(okCoffeeFuntion);

//Cách khác viết trực tiếp luôn
coffeeShop.makingCoffee(function () {
    console.log("Coffee Ok");
});


var numbers = [1, 2, 3, 4,];

var squareNumbers = numbers.map(function (item) {
    return item * item;
});

var filterNumbers = numbers.filter(function (item) {
    return item % 2 === 0;
});

console.log(squareNumbers);

numbers.reduce(function (item1, item2) {
    return item1 + item2;
});

//Vòng lặp đầu tiên thì item1 sẽ là tham số init
numbers.reduce(function (item1, item2) {
    return item1 + item2;
}, init);

var product = [
    { name: 'A', price: 10, quantity: 1 },
    { name: 'B', price: 20, quantity: 2 }
];

product.reduce(function (currentTotal, product) {
    return currentTotal + product.price * product.quantity;
}, 0);