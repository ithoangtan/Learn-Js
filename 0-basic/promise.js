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
        return readFilePromise('./song2.txt');
    })
    .then(function (song2) {
        console.log(song2);
        return readFilePromise('./song3.txt');
    })
    .then(function (song3) {
        console.log(song3);
    })
    .catch(function (err) {
        console.log(err);
    });

//Trong trường hợp không quan tâm thứ tự đọc file thì ta dùng all()
Promise.all([
    //Hàm all này nhận một mảng gồm các promise
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt'),
]).then(function (values) {
    //Lúc này then() được gọi khi cả 3 promise đã resolved
    //Resolve ra kết quả là một array
    console.log(values);
}).catch(function (err) {
    console.log(err);
}); 
