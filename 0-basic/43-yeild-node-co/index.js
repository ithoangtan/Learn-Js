// function* id_maker() {
//     var index = 0;
//     while (index < 2)
//         yield index++;
// }
// var gen = id_maker();
// console.log(gen.next()); // { value: 0, done: false }
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: undefined, done: true }


function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function* generator(i){
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
  }
  
  var gen = generator(10);
  
  console.log(gen.next()); // 10, False
  console.log(gen.next()); // 11, False
  console.log(gen.next()); // 12, False
  console.log(gen.next()); // 13, False
  console.log(gen.next()); // 20, False
  console.log(gen.next()); // undifined, True
