const Book = require('../models/book');

exports.getAll = (req, res) => {
  Book.find({}, (err, books) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error getting books');
    } else {
      res.json(books);
    }
  });
};

exports.createOne = (req, res) => {
  const book = {name,price,quantity}=req.body
  // const book = new Book({
  //   name: req.body.name,
  //   price: req.body.price,
  //   quantity: req.body.quantity
  // });
  book.save((err, book) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating book');
    } else {
      res.status(200).json(book);
    }
  });
};

exports.getOne = (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error getting book');
    } else if (!book) {
      res.status(404).send('Book not found');
    } else {
      res.status(200).json(book);
    }
  });
};

exports.updateOne = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body,{new:true},(err, book) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating book');
    } else if (!book) {
      res.status(404).send('Book not found');
    } else {
      res.json(book);
    }
  });
};

exports.deleteOne = (req, res) => {
  Book.findByIdAndDelete(req.params.id, err => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting book');
    } else {
      res.sendStatus(204);
    }
  });
};



exports.deletea = (req, res) => {
  Book.deleteMany( (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting book');
    } else {
      res.sendStatus(204);
    }
  });
};
