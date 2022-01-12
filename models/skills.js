const skills = [
    {id: 101, skill: 'HTML5', learned: true},
    {id: 102, skill: 'JavaScript', learned: false},
    {id: 103, skill: 'CSS', learned: true},
    {id: 104, skill: 'React', learned: false},
    {id: 105, skill: 'django', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }