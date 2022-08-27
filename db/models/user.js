const mongoose = require('mongoose')

/*const User = mongoose.model('User', {
    name : {
        type: String
    },
    age: {
        type: Number
    }
})*/

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        validate(value){
            if(value === 'pathetic')
                throw new Error('This user is locked')
        },
        unique : true

    },
    age: {
        type: Number,
        default: 18,
        min: 18
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User