const User = require('../models/user');
const jwt = require('jsonwebtoken');

const secretKey = 'secretkey';

exports.signUp = (req, res) => {
  const user = {name,password,email}=req.body
  
  // const user = new User({
  //   name: req.body.name,
  //   password: req.body.password,
  //   email: req.body.email
  // });
  bcrypt.hash(req.body.password, 10, (err, hash)=> {
    user.save({name,password:hash,email},(err, user) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error creating user');
      } else {
        res.status(201).json(user);
      }
    });
});
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error logging in');
    } else if (!user) {
      res.status(401).send('Invalid email or password');
    } else {
      user.compare(req.body.password, (err, isMatch) => {
        if (isMatch) {
          const token = jwt.sign({ user: user }, secretKey);
          res.json({ token });
        } else {
          res.status(401).send('Invalid email or password');
        }
      });
    }
  });
};
