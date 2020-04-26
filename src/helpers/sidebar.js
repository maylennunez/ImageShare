const Stats = require('./stats');
const images = require('./images');
const comments = require('./comments');

module.exports = async viewModel => {
   
   const results = await Promise.all([
   
    images.popular(),
    Stats(),
    newest()

]);

viewModel.sidebar = {
  stats: results[0],
  popular: results[1],
  comments: results[2]  
};
return viewModel;
}