const router = require('express').Router();
const controllers = require('../controllers/exercises');

router.get('/', controllers.getExercises);
router.get('/:id', controllers.getExerciseById);
router.post('/add', controllers.postExercise);
router.delete('/:id', controllers.deleteExercise);
router.put('/update/:id', controllers.updateExercise);

module.exports = router;