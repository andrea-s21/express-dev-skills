const skills = [
    {skill: 'HTML', learned: true},
    {skill: 'CSS', learned: true},
    {skill: 'JavaScript', learned: false},
    {skill: 'jQuery', learned: true},
    {skill: 'Express', learned: true}
];

module.exports = {
    getAll: function() {
        return skills;
    }
};