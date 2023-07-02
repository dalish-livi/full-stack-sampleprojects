const { Router}= require('express');
const newsoacustomer = require ('./newsoacustomer');

const router =Router();

router.use('/newsoacustomer',newsoacustomer);

module.exports = router;