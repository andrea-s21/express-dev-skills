let skills = [
    {id: 101, skill: 'HTML5', learned: true},
    {id: 102, skill: 'JavaScript', learned: false},
    {id: 103, skill: 'CSS', learned: true},
    {id: 104, skill: 'React', learned: false},
    {id: 105, skill: 'django', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function update(id, newSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id !== id);
    Object.assign(skill, newSkill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    skills = skills.filter(skill => skill.id !== id);
  }

  function create(skill) {
    skill.id = Date.now() % 200;
    skill.learned = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }