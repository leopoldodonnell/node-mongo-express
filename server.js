const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

var mongoURL = "mongodb://mongo-serv"
var db

MongoClient.connect(mongoURL, (err, database) => {
    // ... start the server
    if (err) return console.log(err)
    db = database.db('star-wars-quotes') // whatever your database name is
    app.listen(3000, () => {
      console.log('listening on 3000')
    })
})

app.use(bodyParser.urlencoded({extended: true}))

// app.listen(3000, function() {
//     console.log('listening on 3000')
// })

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

