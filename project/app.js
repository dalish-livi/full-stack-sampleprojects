const express = require('express');
const http = require('http');
const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');
const users = require('./data').userDB;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'./public')));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/form.html'));
}); 
// Database connection
const { Client } = require('pg');
const { response } = require('express');
const client = new Client({
  user  : "postgres",
  password: "Qwe123@#",
  host: "localhost",
  port: 5432,
  database: "getintouch"
})

client.connect()
  .then(() => console.log("Connected succesfully"))
  .catch(e => console.log(e))
 
 app.post('/',(request,response,next)=>{
  console.log(request.body)
    const{First_name,Last_name,Email,phone,comment,Address}=request.body;
    client.query('INSERT INTO getintouch("First_name","Last_name","Email",phone,comment,"Address")VALUES($1,$2,$3,$4,$5,$6)',
    [First_name,Last_name,Email,phone,comment,Address],
    (err,res)=>{
        if(err)return next(err);
    }
  
    );   
  });

// Post request
/*app.post('/', (req, res) => {
  const data = req.body
   const query = `
  INSERT INTO public.getintouch(
	"First_name", "Last_name", "Email", phone, comment)
	VALUES (?, ?, ?, ?, ?);
  `

  client.query(query, (err, result) => {
    if (err) {
      console.log(err)
      res.send('Error!')
    } else {
      console.log(result)
      res.send('Success!')
    }
  })
})*/
server.listen(3000, function(){
    console.log("server is listening on port: 3000");
});