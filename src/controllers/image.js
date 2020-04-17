const path = require('path');
const { randomNumber } = require('../helpers/libs');
const fs = require('fs-extra');
const ctrl = {};
const { Image } = require('../models/index');




ctrl.index = async (req, res) => {
    // console.log(req.params.image_id)
    const image = await Image.findOne({filename: {$regex: req.params.image_id}})

res.render('image', {image});
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
    res.send('in')
};
ctrl.comment = (req, res) => {
    res.send('in')
};
ctrl.remove = (req, res) => {
    res.send('in')
};

module.exports = ctrl;