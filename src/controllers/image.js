const ctrl = {};

ctrl.index = (req, res) => {
    
};

ctrl.create = (req, res) => {
console.log(req.file);
res.send(works);
   
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