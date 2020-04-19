const {Schema, model} = require('mongoose');
const ObjectId = Schema.ObjectId   // same =>  const {ObjectId} = Schema;

 const CommentSchema = new Schema({
    image_id: { type: ObjectId },
    email: { type: String},
    name: { type: String},
    gravatar:{ type: String},
    comment: { type: String},
    timeStamp: { type: Date, default: Date.now }
})

module.exports = model('Comment', CommentSchema)