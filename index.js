// CREATING A SERVER FOR GET API

const http =  require('http');
const data =  require('./data');
http.createServer((req,resp) =>{
    resp.writeHead(200,{'content-type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(3000);