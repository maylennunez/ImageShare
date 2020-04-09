const ctrl = {};

ctrl.index = (req, res) => {
    res.render('index')
};

ctrl.create = (req, res) => {
    res.send('in')
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