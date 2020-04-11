const helpers = {};

// Create a random number

helpers.randomNumber = () => {
    const possible = '0123456789';
    let randomNumber = 0;
    for (let i=0; i < 5; i++) {
     randomNumber += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return randomNumber;
};

module.exports = helpers