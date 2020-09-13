const router = require("express").Router();
const Workout = require("../models/workout");

//module.exports = function (router) {

router.get("/api/workouts", (req, res) => {
  Workout.find({}).then(workout => {
      res.json(workout);
  });
});


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
  Workout.findByIdAndUpdate(
    workoutId,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((Workout) => {
      console.log(Workout);
      // savedExercises = Workout(0).exercises;
      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).then((workout) => {
    console.log(workout);
    res.json(workout);
  });
});


module.exports = router;
