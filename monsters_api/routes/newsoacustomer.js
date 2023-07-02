const {Router} =require ('express');
const { request, response } = require('../app');
const pool = require('../db');

const router = Router();

router.get('/',(request,response,next)=> {
    pool.query('SELECT * FROM newsoacustomer ORDER BY id ASC',(err,res)=>{
        if(err) return next(err);

        response.json(res.rows);
    });
});


router.post('/',(request,response,next) => {
    const {nameofthecustomer,customercode,emailid} = request.body;

    pool.query(
        'INSERT INTO newsoacustomer(nameofthecustomer,customercode,emailid) VALUES ($1,$2,$3)',
        [nameofthecustomer,customercode,emailid],
        (err,res)=>{
            if(err) return next(err);
            response.redirect('/newsoacustomer');
        }
    )
});



    router.get('/:id',(request, response, next) => {
        const { id } = request.params;
    
        pool.query('SELECT * FROM newsoacustomer WHERE id=$1', [id],(err,res) =>{
            if (err) return next(err);
    
            response.json(res.rows);
        });
    
    }); 


    router.put('/:id',(request,response, next) => {
        const { id } = request.params;
               
         const keys =['nameofthecustomer','customercode','emailid'];
         
         const fields= [];
     
         keys.forEach(key => {
             if (request.body[key]) fields.push(key);
         });
         console.log(keys)
      
         fields.forEach((field, index)=> {
             pool.query(
                 `UPDATE newsoacustomer SET ${field}=($1) WHERE id=($2)`,
                 [request.body[field],id],
                 (err,res) => {
                     if (err) 
                     {
                        console.log(err)
                        return next(err);}
                    
                        if(index === fields.length - 1) 
                        response.json(res);
                 }
                );
     
         });
        
     });

     router.delete('/:id',(request,response,next)=>{
        const id =request.params.id;
        // console.log(request.params)
        pool.query(' DELETE FROM newsoacustomer WHERE id= ($1)',[id], (err,res) => {
            if(err){
                // return next (err);
                console.log(err);
            }else{
            response.json(res);
            }
        });
    });



    
module.exports = router;