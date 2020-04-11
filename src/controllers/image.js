const path = require('path');

const ctrl = {};

ctrl.index = (req, res) => {
    
};

ctrl.create = (req, res) => {
// console.log(req.file);
const imageTempPath = req.file.path;                  // get image location
const ext = path.extname(req.file.originalname).toLocaleLowerCase();          // to get extension 

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