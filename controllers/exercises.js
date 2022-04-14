let Exercise = require('../models/exercise.model');

module.exports.getExercises = (req, res) => {
    Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
}

module.exports.getExerciseById = (req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
}

module.exports.postExercise = (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
}

module.exports.deleteExercise = (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}

module.exports.updateExercise = (req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const body={
        username: username,
        description: description,
        duration: duration,
        date: date
    }

    Exercise.findByIdAndUpdate(id, body)
    .then(() => res.json('Exercise updated.'))
    .catch(err => res.status(400).json('Error: ' + err));
}

