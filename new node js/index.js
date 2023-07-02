const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server=http.createServer((req,res)=>{
    const{ url }=req;
    console.log (url);

    if (url==='/translations'){
        const translations ={1:'one',2:'two' };
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(translations));
        res.end();
    }

    res.end('welcome');
});

server.listen(port,hostname,()=>{
    console.log("Listening port:"+hostname+":"+port);
}); 