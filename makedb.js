const MongoClient = require('mongodb').MongoClient

var host = process.argv[2] || 'mongo-serv'


var mongoURL = `mongodb://${host}/star-wars-quotes`

console.log(`Creating database: ${mongoURL}`)

MongoClient.connect(mongoURL, (err, database) => {
    // ... start the server
    if (err) return console.log(err)
    database.close()
})
