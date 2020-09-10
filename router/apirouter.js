const db = require("../models");
const { Workout } = require("../models");

module.exports = function(app) {
    app.get("router/apirouter", (req, res) => {
        db.Workout.find({})
        .then((workout) => {
            res.json(workout);
        })
    })
}

app.post("router/apirouter", async (req,res) => {
    try {
        const response = await db.Workout

    }
})

module.exports = router;
