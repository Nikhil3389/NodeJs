// CREATING A SERVER FOR GET API

const express =  require('express')
const app =  express();
app.get('',(req,res) =>
{
    res.send('Hello it is Home Page');
});
app.get('/about',(req,res)=>{
    res.send('Hello it is about page');
});
app.listen(5000);