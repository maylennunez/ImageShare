const { Comment, Image } = require('../models');

async function imagesCounter() {
    return await Image.countDocuments();


}



async function commentsCounter() {
    return await Comment.countDocuments();


}


async function imageTotalViewsCounter() {
    const result = await Image.aggregate([{
        $group: {
            _id: '1',
            viewsTotal: { $sum: '$views' }
        }
    }])
    let viewsTotal= 0;
    if(result.length > 0) {
        viewsTotal += result[0].viewsTotal;
      }
      return viewsTotal;
}


async function likesTotalCounter() {
const result = await Image.aggregate([{
    $group: {
        _id: '1',
        likesTotal: {$sum: '$likes'}
    }
    }])
    let likesTotal = 0;
    if (result.length > 0) {
      likesTotal += result[0].likesTotal;
    }
    return likesTotal;

}


module.exports = async () => {

const result = await Promise.all([
    imagesCounter(),
    commentsCounter(),
    imageTotalViewsCounter(),
    likesTotalCounter()
])
return {
    images:result[0],
    Comment: result[1],
    views: result[2],
    likes: result[3]
}
}