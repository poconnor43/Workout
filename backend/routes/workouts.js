const express = require('express')
//const Workout = require('../models/workoutModel')
const {createWorkout, getWorkouts, getWorkout, deleteWorkout,updateWorkout} = require('../controllers/workoutControllers')

const router = express.Router()
// only the need for a forward slash due to the server file specifiying the location
// we dont want to over fill thes functions so we will create control file with a control function

//this  gets all of the workouts
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout)

//POST a new workout(create)
router.post('/', createWorkout)
//DELETE a workout
router.delete('/:id', deleteWorkout)
//UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router