const MongoClient = require('mongodb').MongoClient

var mongoURL = "mongodb://mongo-serv/star-wars-quotes"

MongoClient.connect(mongoURL, (err, database) => {
    // ... start the server
    if (err) return console.log(err)
    database.close()
})
