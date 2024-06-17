// ? Dependencies

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const connectTodb = require('./controllers/psql.js');
const hbs = exphbs.create({});

const Quiz = require("./models/quiz.js");
const sequelize = require("./config/connection");
const routes = require('./controllers/index.js');
// ? Sets up the Express App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(routes);

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));


app.set("views", path.join(__dirname, "views"));

//connectTodb();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

//my repo 6/14/2024 16:15

//my updated repo named new-branch-main 6/16/2024 15:51