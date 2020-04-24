const Stats = require('./stats');
const images = require('./images');
const comments = require('./comments');

module.exports = function (viewModel) {
    images.popular();
    Stats();
}