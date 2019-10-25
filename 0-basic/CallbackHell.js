var fs = require('fs');

// Call back hell
fs.readFile('./song1.txt', { encoding: 'utf8' }, function (err, song1) {
    console.log(song1);
    fs.readFile('./song2.txt', { encoding: 'utf8' }, function (err, song1) {
        console.log(song2);
        fs.readFile('./song3.txt', { encoding: 'utf8' }, function (err, song1) {
            console.log(song3);
        });
    });
});
// Promise fs
var fs = require('promise-fs');
fs.readFile('./song1.txt', { encoding: 'utf8' }).then((song1) => {
    console.log(song1);
}).catch((err) => {
    console.log(err);
});

//Hàm readFile này trả về một promise có 2 phương thức chính
// là then và catch 
fs.readFile('./song1.txt', { encoding: 'utf8' })
    .then(function (song1) {
        console.log(song1);
    })
    .catch(function (err) {
        console.log(err);
    }); 

function onDone(song) {
    console.log(song);
}

function onError(err) {
    console.log(err);
}

fs.readFile('./song1.txt', { encoding: 'uft8' })
    .then(onDone())
    .catch(onError());

// Hàm này trả về một promise
function readFile(path) {
    return fs.readFile('./song1.txt', { encoding: 'uft8' });
}

//Readfile thứ nhất sau đó readfile thứ 2
readFile('song1.txt')
    .then(onDone())
    .then(function () {
        return readFile('song2.txt');
    })
    .then(onDone())
    .catch(onError());
