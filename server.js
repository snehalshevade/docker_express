const express=require('express')
const routerproduct=require('./product')
const bodyparser=require('body-parser')
const app=express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(bodyparser.json())
app.use('/product',routerproduct)

app.get('/',(request,response)=>{
    response.send('welcome to my backend')





})

//app.listen(process.env.PORT);
 app.listen(9898,()=>{
     console.log("server started")
})