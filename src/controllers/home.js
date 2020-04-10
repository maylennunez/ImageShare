const ctrl = {};

ctrl.index = (req, res) => {            // export function index
    res.render('index')
};

module.exports = ctrl;