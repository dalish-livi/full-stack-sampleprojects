const mysql=require("mysql");

const con=mysql.createPool({
    connectionLimit:10,
    host :process.env.DB_HOST,
    user:process.env.DB_USER,
    user:process.env.DB_PASS,
    database : process.env.DB_NAME
});

exports.view=(req,res)=>{

    con.getConnection((err,connection)=>{
        if(err) throw err
        const {first_name,last_name,Email,phone,comment}=req.body;
        console.log("connection Success")
        connection.query("insert in to users(first_name,last_name,Email,phone,comment) values(?,?,?,?,?)",[first_name,last_name,Email,phone,comment],(err,rows)=>{
            connection.release();
            if(!err){
                console.log("Good");
                res.render("home",{rows});
            }
        })
    })
    res.render("home");
};