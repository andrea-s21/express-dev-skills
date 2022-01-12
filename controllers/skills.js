const Skill = require('../models/skills');

 module.exports = {
    index,
    show,
    new: newSkill,
    create
  };

  function create(req, res) {
    console.log(req.body);
    req.body.learned = false;
    Skill.create(req.body);
    res.redirect('/skills');
  }

  function newSkill(req, res) {
    res.render('skills/new');
  }
  
  function show(req, res) {
    const skill = Skill.getOne(req.params.id)
    res.render('skills/show', {skill});
  } 
  
  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }
