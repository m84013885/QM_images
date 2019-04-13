
// const name = 'line/';
const name = 'my/';
// const name = 'paper/';
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const url = path.join(__dirname, name);
let sorTarr = [];
fs.readdir(url, 'utf8', (err, fileList) => {
    if (err) throw err;
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
    sorTarr = _.orderBy(sorTarr, 'name');
    sorTarr.forEach((item, index) => {
        let oldName = item.name + item.type;
        let newName = index + '.jpg';
        fs.rename(url + oldName, url + newName, (err) => {
            if (err) throw err;
        });
    })
})