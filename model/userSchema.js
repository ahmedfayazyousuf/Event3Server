const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    timetaken: {
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true,
    },
);


const User = mongoose.model('USER', userSchema);
module.exports = User;