const express = require('express');
const router = express.Router();
const controller = require('../controllers/BookController');

router.post('/createbook', controller.createBook);
router.get('/viewbooks', controller.viewBooks);
router.put('/updatebook/:id', controller.updateBook);
router.delete('/deletebook/:id', controller.deleteBook);
module.exports = router;