const mongoose = require('mongoose');
const Joi = require('joi');
const schema = Joi.Object({
  username:Joi.string().alphanum().min(3).required().unique()
  .pattern(new RegExp("^a-zA-Z0-9,{2,30}$"))
})



// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   password: { type: String, required: true },
//   email: { type: String, required: true },
//   books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
// });
userSchema.plugin(uniqueValidator,{
  message: 'Validation failed',
  name: 'ValidationError',
  errors: {
      name: {
          message: 'Error, expected `name` to be unique. Value: `JohnSmith`',
          name: 'ValidatorError',
          kind: 'unique',
          path: 'name',
          value: `name`
      }
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;


