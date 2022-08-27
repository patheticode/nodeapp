require('./db/mongoose.js')
const express = require ('express')
const http = require('http').createServer(express);
const port = process.env.PORT || 3000
const app = express()
const io = require('socket.io')(http);

//models
const User = require('./db/models/user')

const findUsers = async () => {

    try {
        const users = await User.find({})
        console.log(users)
    } catch (error) {
        console.log(error)
    }
}

const createuser = async (data) => {

    try{
        const user = new User(data)
        await user.save()
        console.log(user)
    }
    catch(error){
        console.log(error)
    }
}

createuser({
    name: "pathetic",
    age: 19
})

/*findUsers()*/

//mongodb bez mongoose

/*mongoClient.connect(url, {}, (error, client) => {

    if(error)
        console.log('Database connection lose')

    console.log('Database connection done')

    const db = client.db(dbname)*/



//adding user (one object)

/*    db.collection('users').insertOne({

        name: 'Wojtek',
        age: 20,
        admin : 'tak'
    }, (error, result) => {

        if(error)
            console.log('Adding user error', error)

        console.log(result)
    })*/


// adding many users (many objects)

/*    db.collection('users').insertMany([
        {
            name: 'Ola',
            age : 20,
            admin : false,
            chat : true
        },
        {
            name: 'Marek',
            age : 32,
            admin : true,
            chat : true
        },
        {
            name: 'Karol',
            age : 17,
            admin : false,
            chat : true
        }


    ], (error, result) => {

        if(error)
            console.log('Adding objects error', error)

        console.log('Adding objects done', result)
    })*/

//inserting object with selected id

//const ObjectID = mongo.ObjectID

    /*const id = new ObjectID()
    console.log(id.toHexString())

    db.collection('users').insertOne({
        _id : id,
        name: 'Gej',
        age: 26
    })*/

//finding things in collection users
//count, toArray
//id.getTimestamp() - wyswietla date utworzenia danego obiektu(id)
//_id : new ObjectID('6306218ed3cf6e75381bc64d') - wyswietla object po id

    /*db.collection('users').findOne({
        _id : new ObjectID('6306218ed3cf6e75381bc64d')
    },(error, results) => {
        console.log(results)
    })*/


//updating documents

    /*db.collection('users').updateMany({
        age: 19
    }, {
        $set: {
            age: 16
        }
    })*/

// deleting documents

    /*db.collection('users').deleteMany({
        age : 16
    }, (error, result) => {
        console.log(result)
    })*/
/*})*/



// http express things

app.use(express.static("views"))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {

    res.render('index')

})

app.listen(port)

// socket.io connection transfer

io.on('connection', (socket) => {
    console.log('User Online');

    socket.on('codeboard-message', (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.emit('message-from-others', msg);
    });

});