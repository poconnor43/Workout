const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({createAt:-1})   // put specific values for this casein brackets for our made workout module
    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout"})
    }

    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404),json({error: "no such workout"})
    }

    res.status(200).json(workout)
}

//create a new workout
const createWorkout = async (req,res) => {
    const {title, load,reps} = req.body
    // add the doc to db
    try {
        const workout = await Workout.create({title, load,reps});
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout
const deleteWorkout = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(404),json({error: "no such workout"})
    } else{
        return res.status(200).json(workout)
    }
}

//update a workout
const updateWorkout = async(req,res) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body  //spread property of object
    })

    if(!workout){
        return res.status(404),json({error: "no such workout"})
    } else{
        return res.status(200).json(workout)
    }
}




module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}