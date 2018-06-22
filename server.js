const express = require('express')
const app = express()
app.use(express.static('public'));
app.set('view engine','ejs')

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function (req, res) {
    // NEW CODE
    res.render('index');
  })


  app.post('/',function(req,res){
    console.log(req.body.city);
    res.render('index');

  })
  app.listen(3000,function () {
    console.log('Example app listening on port 3000')
  })