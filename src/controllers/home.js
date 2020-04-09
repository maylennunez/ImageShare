const ctrl = {};

ctrl.index = (req, res) => {            // export function index
    res.send('index page')
};

module.exports = ctrl;