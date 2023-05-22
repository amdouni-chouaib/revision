const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routers/userRouter');
const bookRoutes = require('./routers/bookRouter');

const app = express();
const port = 3000;
//const secretKey = 'secretkey';

// Configure body-parser to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.use('/user', userRoutes);
app.use('/user/:idUser', bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
