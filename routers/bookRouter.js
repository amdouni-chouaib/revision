const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const {getAll,createOne,getOne,updateOne,deleteOne} = require('../controllers/bookController');
const auth = require('../middlewares/auth');

router.get('/:idUser/books', auth, bookController.getAll);
router.post('/:idUser/books', auth, bookController.createOne);
router.get('/:idUser/books/:id', auth, bookController.getOne);
router.put('/:idUser/books/:id', auth, bookController.updateOne);
router.delete('/:idUser/books/:id', auth, bookController.deleteOne);



//-------------------



router.get('/:idUser/books', auth,getAll);
router.post('/:idUser/books', auth, createOne);
router.get('/:idUser/books/:id', auth, getOne);
router.put('/:idUser/books/:id', auth, updateOne);
router.delete('/:idUser/books/:id', auth, deleteOne);

module.exports = router;
