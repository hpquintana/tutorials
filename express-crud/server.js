//https://zellwk.com/blog/crud-express-mongodb/
const express = require('express')
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

var db

MongoClient.connect('mongodb://express:cruidPW1@ds119732.mlab.com:19732/express-cruid', (err, client) => {
    if (err) return console.log(err)
    db = client.db('express-cruid')
    app.listen(3000, () => {
      console.log('listening on 3000')
    })
});

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      res.render('index.ejs', {quotes: result})
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      res.redirect('/')
    })
})