const db = require("../models");
module.exports = function(app){
app.get("/api/workouts", (req,res) => {
    db.Workout.find({}, (err,found) => {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
            }
        });
    });

app.post("/api/workouts/", (req,res) => {
    db.Workout.create(req,body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

app.put("/api/workouts/:id", (req,res) => {
db.Workout.findOneAndUpdate(
    {_id: req.params.id}, {exercises: req.body}
    ).then((dbWorkout) => {
    res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});
}
