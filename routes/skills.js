var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

// GET index
router.get('/', skillsCtrl.index);
//GET new
router.get('/new', skillsCtrl.new);
//GET skill
router.get('/:id', skillsCtrl.show)
//POST
router.post('/', skillsCtrl.create);
//DELETE
router.delete('/:id', skillsCtrl.delete);
//GET edit 
router.get('/:id/edit', skillsCtrl.edit);
//PUT edit 
router.put('/:id', skillsCtrl.update);


module.exports = router;
