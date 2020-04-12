const path = require('path');
const {randomNumber} = require('../helpers/libs');
const fs = require('fs-extra');
const ctrl = {};

ctrl.index = (req, res) => {
    
};

ctrl.create = (req, res) => {
// console.log(req.file);
const imgUrl = randomNumber();
console.log(imgUrl);
const imageTempPath = req.file.path;                  // get image location
const ext = path.extname(req.file.originalname).toLocaleLowerCase();          // to get extension 
const targetPath = path.resolve('src/public/upload/${imgUrl}${ext}')

if (ext === '.png' || ext === '.jpg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);       // move image from imageTempPath to targetPath
}
res.send('works!');
};





ctrl.like = (req, res) => {
    res.send('in')
};
ctrl.comment = (req, res) => {
    res.send('in')
};
ctrl.remove = (req, res) => {
    res.send('in')
};

module.exports = ctrl;