const db = require("../models")

module.exports = (app) => {


//Get exercise routes
app.get("/api/workouts", (req,res) => {
    //Grabs all workout with find({})
    db.Workout.find({}).then(dbWorkout => {
dbWorkout.forEach(workout => {
    let zero = 0;
    workout.exercises.forEach(e => {
        zero += e.duration;
    })
    workout.totalDuration = zero
})
res.json(dbWorkout);
})

})

//Create a workout route
app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout);
    }))
   
});




app.put("/api/workouts/:id", (req, res) => {

    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }) });



















}