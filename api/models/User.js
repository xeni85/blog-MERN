const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const userSchema = new Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true, min: 6},
    // email: {type: String, required: true, unique: true},
    // role: {type: String, required: true, default: 'user'},
    // created_at: {type: Date, default: Date.now}
})

const UserModel = model('User', userSchema);

module.exports = UserModel;