const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    tags: [String],
    datePublished: Date,
    comments: [{ name: String, comment: String }],
    likes: Number
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;
