const express = require('express');

const app = express();
const port = 8000;

app.set('view engine', 'hbs'); // view engine is set to handlebars

app.use('/assets', express.static(__dirname + '/assets')); // static files are served from the assets folder

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/project-detail', (req, res) => {
    res.render('project-detail');
});

app.get('/add-project', (req, res) => {
    res.render('add-project');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

