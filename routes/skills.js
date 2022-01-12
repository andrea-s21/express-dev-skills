var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills')


// GET index
router.get('/', skillsCtrl.index);
//GET skill
router.get('/skill', skillsCtrl.show)
module.exports = router;
