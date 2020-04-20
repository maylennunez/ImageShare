const path = require('path');
const { randomNumber } = require('../helpers/libs');
const fs = require('fs-extra');
const ctrl = {};
const md5 = require('md5');
const { Image , Comment } = require('../models/index');




ctrl.index = async (req, res) => {
    // console.log(req.params.image_id)
    const image = await Image.findOne({filename: {$regex: req.params.image_id}})
const comments = await Comment.find({image_id: image._id});
res.render('image', {image, comments});
};

ctrl.create =  (req, res) => {
    // console.log(req.file);
     const saveImage = async () => {

        const imgUrl = randomNumber();                                                     
        const images = await Image.find({ filename: imgUrl });            // randon number validation
        if (images.length > 0) {
            saveImage();
        } else {
            console.log(imgUrl);
            const imageTempPath = req.file.path;                                           // get image location
            const ext = path.extname(req.file.originalname).toLocaleLowerCase();          // to get extension 
            const targetPath = path.resolve('src/public/upload/${imgUrl}${ext}')

            if (ext === '.png' || ext === '.jpg' || ext === '.gif') {
                await fs.rename(imageTempPath, targetPath);                             // move image from imageTempPath to targetPath
                const newImg = new Image({
                    title: req.body.title,
                    filename: imgUrl + ext,                                             //image save in dataBase
                    description: req.body.description
                });
                const imageSaved = await newImg.save();
                res.redirect('/images/' + imgUrl)
            } else {
                await fs.unlink(imageTempPath);                                        // delete file
                res.status(500).json({ error: 'Only Images are allowed' });
            }
            // console.log(newImg)
            // }
            
        };
    }
    
};



ctrl.like = (req, res) => {
   
};

ctrl.comment = async (req, res) => {
  //  console.log(req.body)
   const image = await Image.findOne({filename: {$regex: req.params.image_id}})
    if (image) {
     const newComment = new Comment(req.body);
     newComment.gravatar = md5(newComment.email);
     newComment.image_id = image._id;
    await newComment.save();
   // console.log(newComment)
    }
    res.redirect('/images' + image.uniqueId)
};


ctrl.remove = (req, res) => {
    res.send('in')
};

module.exports = ctrl;