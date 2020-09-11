const router = require("express").Router();
const Workout = require("../models/workout");

//module.exports = function (router) {

router.get("/api/workouts", ({body}, res) => {
  Workout.find({}).then((response) => {
    res.json(response);
  });
});
//};

router.post("/api/workouts", async (req, res) => {
  try {
    const response = await Workout.create({});
    res.json(response);
  } catch (err) {
    console.log("problem with post", err);
  }
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log(body, params);
  const workoutId = params.id;
  let savedExercises = [];

  Workout.findByIdAndUpdate(
    workoutId,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => {
      console.log(dbWorkout);
      savedExercises = dbWorkout(0).exercises;
      res.json(dbWorkout[0].exercises);
      // let allExercises = [...savedExercises, body]
      //console.log(allExercises)
      //updatedWorkout(allExercises)
    })
    .catch((err) => {
      res.json(err);
    });
  function updatedWorkout(exercises) {
    Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function (
      err,
      doc
    ) {
      if (err) {
        console.log(err);
      }
    });
  }
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).then((workout) => {
    console.log(workout);
    res.json(workout);
  });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({}).then((workout) => {
    console.log(workout);
    res.json(workout);
  });
});

module.exports = router;
