const db = require("../models")

module.exports = (app) => {


//Get exercise routes

app.get("/api/workouts", (req,res) => {
    //Grabs all workout with find({})
    db.Workout.find({}).then(workoutdb => {
workoutdb.forEach(workout => {
    let zero = 0;
    workout.exercises.forEach(e => {
        zero += e.duration;
    })
    workout.totalDuration = zero
})
res.json(workoutdb);
});
})





























}