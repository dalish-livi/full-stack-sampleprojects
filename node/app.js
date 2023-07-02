const express = require("express");
const bodyParser = require("body-parser");
const fortunes =require("./data/fortunes");
const { json } = require("body-parser");
 
const app =express();

app.get(bodyParser.json());
app.get('/fortunes',(req,res) =>{
    res.json(fortunes);
});

app.get('/fortunes/random',(req,res)=>{
   console.log('requesting random fortunes');

   const random_index= Math.floor(Math.random() *fortunes.length);

   const r_fortunes=fortunes[random_index]
   res.json(r_fortunes)
});

app.get('/fortunes/:id',(req,res) => {
    res.json(fortunes.find(f=>f.id== req.params.id));
});

app.post('/fortunes',(req,res) =>{
    const {MSG} = res.body;
    const fortune_ids =fortune.map(f=>f.id)
    const fortune={
      id: (fortune_ids.length > 0 ? Math.max(...fortune_ids) : 0) +1,
    MSG
};

const new_fortunes=fortunes.concat(fortune);
res.json(new_fortunes);
fs.writeFile('./data/fortunes.json',json.stringfy(new_fortunes)), err => console.log (err);

});


module.exports=app;