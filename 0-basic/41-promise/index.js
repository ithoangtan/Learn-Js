var fs = require('promise-fs');

function onDone(song) {
    console.log(song);
}
function onError(error) {
    console.log(error);
}
function readFile(path) {
    return fs.readFile(path, { encoding: 'utf8' });
}
readFile('./song1.txt') //readFile này trả về một Promise; 
    //Và Promise này có 2 method: then() và catch()
    .then(onDone)
    .then(function () {
        return readFile('./song2.txt');
        //Nếu không trả về thì onDone tiếp
        // theo sẽ truyền vào undifined
    })
    .then(onDone)
    .catch(onError);