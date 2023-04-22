const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const NewsSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true,
});

const NewsModel = model('News', NewsSchema);

module.exports = NewsModel;