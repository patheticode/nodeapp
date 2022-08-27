//const mongoClient = require('mongodb').MongoClient
//const mongo = require('mongodb')
const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/chattix' //standard
const dbname = 'chattix' //selected db

mongoose.connect(url, {}, (error, response) => {

    if(error)
        console.log('Database connect error', error)
    console.log('Database connection is ok')
})
