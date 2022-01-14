const Skill = require('../models/skill');

 module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
  };

  function update(req, res) {
    req.body.learned = !!req.body.learned;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
  }

  function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {skill});
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

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
