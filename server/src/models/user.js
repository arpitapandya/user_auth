import mongoose from 'mongoose';
import { hashingUtils } from 'utils';
import { userValidator } from 'dbValidators';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: [8, 'password must be at least 8 characters'],
    validate: {
      validator: userValidator.passwordValidator,
      message: () => 'Not Valid password',
    },
  },
  age: {
    type: Number,
  },
  role: {
    type: String,
    required: true,
  },
});

userSchema.statics.findByUserName = function (username) {
  return this.findOne({ username });
};

userSchema.statics.createUser = async function (username, password, age, role) {
  const hashPassword = await hashingUtils.encrypt(password);
  return this.create({
    username,
    password: hashPassword,
    age,
    role,
  });
};

userSchema.pre('updateOne', async function (next) {
  if (this._update.password) {
    this._update.password = await hashingUtils.encrypt(this._update.password);
  }
  next();
});


module.exports = mongoose.model('User', userSchema);
