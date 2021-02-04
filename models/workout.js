

const mon = require("mongoose");
const Schema = mon.Schema;

//New Schema
//Correlate to seeder.js
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0,
      },
      reps: {
          type: Number,
          default: 0
      },
      sets: {
          type: Number, 
          default: 0
      },
      distance: {
          type: Number, 
          default: 0
      }
    }
  ],
totalDuration: {
    type: Number,
    default: 0
}
});

//Compiling Model
const Workout = mon.model("Workout", WorkoutSchema);

module.exports = Workout; 
