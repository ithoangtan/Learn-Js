var fs = require('fs');

// console.log('start');
// var song1 = fs.readFileSync('./song1.txt',{encoding:'utf8'});
// console.log(song1);
// var song2 = fs.readFileSync('./song2.txt', {encoding:'utf8'});
// console.log(song2);
// console.log('end');

console.log('start');
fs.readFile('./song1.txt' ,{encoding: 'utf8'}, function(err, dataSong1){
    console.log(dataSong1);
});
console.log('end');
//Result: start, end, dataSong1