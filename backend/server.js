require('dotenv').config()

const express = require('express')
const workoutRoutes =require('./routes/workouts.js')
const mongoose = require('mongoose')
// express app
const app = express()

// this runs everytime someone sends a message to the port
app.use(express.json()) // passes the data to the request objects and use the

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
});

//routes grabbed from our attached case on the workout file
app.use('/api/workouts',workoutRoutes)

//conect to the db and update and work with all the info
mongoose.connect(process.env.MONGO_UI)
    .then(() => {
        //listening for port requests
        app.listen(process.env.PORT, () => {
            console.log("listening on port ", process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)
    });