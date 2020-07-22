let _ = require("lodash");

let myArr = [
   1,
   2,
   "a",
   "b",
   null,
   0,
   undefined,
   false,
   true,
   { main: "main" },
   [1, 2],
];

console.log("............START...........START..........START...............START............START.........");

// Tách mảng theo tham số
console.log("CHUNK",_.chunk(myArr, myArr.length/2),"\n");
console.log("........................................................................................");

// Loại bỏ các giá trị: null, undefined, false,0
console.log("COMPACT",_.compact(myArr),"\n");
console.log("........................................................................................");


// Nối mảng với nhau
console.log("CONCAT",_.concat(myArr,2,["c1"],[["c2"]]),"\n");
console.log("........................................................................................");


// Phần tử của mảng thứ nhất, không có trong các mảng kiểm tra
console.log("DIFFERENCE",_.difference([1,2],[1]));
console.log("DIFFERENCE",_.difference([1,2,3],[3,4,5]));
console.log("DIFFERENCE",_.difference([1,3,4,5,6,7,8,9],[1,3]),"\n");
console.log("........................................................................................");

console.log("............END........END...........END........END.........END........END.......");

