// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');
router.get('/edit', productsController.edit);

/*router.get('/', productsController.edit); 

/*

router.get('/productCart', productsController.productCart); 

router.get('/productDetail', productsController.productDetail);  


router.get('/create', productsController.create);*/

module.exports = router;