const path = require('path');
const express = require('express');
const skillsDb = require('./data/skills-db');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
});

app.get('/home', function (req, res) {
    res.render('home', {today: new Date()});
});

app.get('/skills', function(req, res){
    res.render('skills/index', {
        skills: skillsDb.getAll()
    });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
}); 