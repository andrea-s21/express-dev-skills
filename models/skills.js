const skills = [
    {skill: 'HTML5', learned: true},
    {skill: 'JavaScript', learned: false},
    {skill: 'CSS', learned: true},
    {skill: 'React', learned: false},
    {skill: 'django', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne() {
    return skills.find(skill => skill.skill === skill);
  }