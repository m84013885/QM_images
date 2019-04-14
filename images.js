// const name = 'line/';
const name = 'test/';
// const name = 'paper/';

const mozjpeg = require('imagemin-mozjpeg');
const fs = require('fs');
const path = require('path');
const url = path.join(__dirname, name);
fs.readdir(url, 'utf8', (err, fileList) => {
    if (err) throw err;
    fileList.forEach((item) => {
        console.log(item)
    })
})

function explorer(path){
    fileList.forEach((item) => {
        let length = item.split('.').length;
        //  //获取文件后缀名
        let type = '.' + item.split('.')[length - 1];
        //  //获取文件名
        let name = item.split('.')[0];
        if (type === '.jpg' || type === '.png' || type === '.jpeg' || type === '.JPG' || type === '.PNG' || type === '.JPEG' || type === '.HEIC') {
            if (!isNaN(parseInt(name)) && /^[0-9]+$/.test(name)) {
                sorTarr.push({ name: parseInt(name), type: type });
            } else {
                sorTarr.push({ name: name, type: type });
            }
        }
    })
    // fs.readdir(path, function(err, files){
    // //err 为错误 , files 文件名列表包含文件夹与文件
    //     if(err){
    //         console.log('error:\n' + err);
    //         return;
    //     }
    //     console.log(files)
    //     files.forEach(function(file){

    //         fs.stat(path + '/' + file, function(err, stat){
    //             if(err){console.log(err); return;}
    //             if(stat.isDirectory()){                 
    //                 // 如果是文件夹遍历
    //                 explorer(path + '/' + file);
    //             }else{
    //                 // 读出所有的文件
    //                 console.log('文件名:' + path + '/' + file);
    //                 var name = path + '/' + file;
    //                 var outName = path + '/' +'another_'+file

    //                 images(name)

    //                     .save(outName, {               //Save the image to a file,whih quality 50
    //                             quality : 60                    //保存图片到文件,图片质量为50
    //                         });

    //             }               
    //         });

    //     });

    // });
}
// explorer(path);