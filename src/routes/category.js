const express = require('express');

const router = express.Router();
const { CategoryController } = require('../controller/category');
const { validateCategory } = require('../helpers/category');

router.get('/', CategoryController.getProduct);
router.post('/', validateCategory, CategoryController.insert);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.delete);
module.exports = router;
