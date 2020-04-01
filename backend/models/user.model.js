const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, //for white spaces it removes them
      minlength: 3
    }
  },
  {
    timestamps: true // create fields when it was created and modified
  }
);

const User = mongoose.model('User', userSchema);
//'User' is the name we using

module.exports = User;
