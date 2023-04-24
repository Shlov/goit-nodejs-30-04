const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const users = new Schema({
  name:{
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null
  }
}, {timestamps: true}
);

const Users = mongoose.model('user', users);

module.exports = Users;