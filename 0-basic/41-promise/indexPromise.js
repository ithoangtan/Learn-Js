var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        //Bên trong Promise làm gì thì làm nhớ gọi resolve và reject 
        fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
            if (err) {
                reject(err); //Nhớ gọi hàm này trong Promise 
                //Những gì trong reject sẽ truyền vào catch() 
            }
            else {
                resolve(data); //Nhớ gọi hàm này trong Promise 
                //Những gì bên trong resolve sẽ truyền vào then() 
            }
        });
    });

}

readFilePromise('song1.txt')
    .then(function (song1) {
        console.log(song1);
    })
    .catch(function (err) {
        console.log(err);
    });