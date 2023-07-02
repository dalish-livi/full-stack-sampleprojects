const { Router} = require('express');
const { request, response } = require('../app');
const pool = require ('../db');
const router = Router( );

router.post('/', (request, response,next) => {
    const {nameofthecustomer,customercode,emailid} = request.body;
    pool.query('INSERT INTO newsoacustomer (nameofthecustomer,customercode,emailid) VALUES($1,$2,$3)',[nameofthecustomer,customercode,emailid],(err,res) => {
        if (err) return next (err);
            
        response.redirect('/newsoacustomer');
    });

});


module.exports = router;