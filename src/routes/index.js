const express = require('express');    // import express to use express.Router
const router = express.Router();  
     
const home = require('../controllers/home');
const images = require('../controllers/image');

module.exports = app => {

     router.get('/', home.index);                                // print all images
     router.get('/images/:image_id', image.index);               // print an specific image
     router.post('/images', image.create);                       // post image
     router.post('/images/:image_id/like', image.like);           //  likes
     router.post('/images/:image_id/comment', image.comment);     // comments
     router.delete('/images/:image_id', image.remove);            // delete images 

     app.use(router);
};