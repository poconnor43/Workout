const mongoose = require('mongoose');

const Schema = mongoose.Schema
// makes a new schema set up yhe data of our info
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }, 
    load: {
        type: Number,
        required: true
    }
}, {timestamps:true})

//schema defines the structure and the model applies it to be used
// keep file singular becuase it will be made to be plural
module.exports = mongoose.model('Workout', workoutSchema);
