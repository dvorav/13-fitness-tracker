const db = require("../models");


module.exports = function (app) {



//Get Route to find all exercises
    app.get("/api/workouts", (req, res) => {

        db.Workout.find({}).then(dbWorkout => {
            dbWorkout.forEach(workout => {
                let total = 0;
                workout.exercises.forEach(a => {
                    total += a.duration;
                });
                workout.totalDuration = total;

            });

            res.json(dbWorkout);
        })
        // .catch(err => {
        //     res.json(err);
        // });
    });
 //Get Route
 app.get("/api/workouts/range", (req, res) => {

    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
    // .catch(err => {
    //     res.json(err);
    // });

});

 // Add an exercise
    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            })
            // .catch(err => {
            //     res.json(err);
            // });

    });

 //Create a workout
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body).then((dbWorkout => {
            res.json(dbWorkout);
        }))
        // .catch(err => {
        //     res.json(err);
        // });
    });

  

}

