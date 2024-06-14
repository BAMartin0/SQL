// ? Dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const Quiz = require("./models/quiz");
const sequelize = require("./config/connection");


// ? Sets up the Express App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',api);

//const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/quiz-routes'));
app.set("views", path.join(__dirname, "views"));


// ? Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});

//my repo 6/14/2024 16:15