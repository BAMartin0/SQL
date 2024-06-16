// ? Dependencies

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// const PORT = 3001;
// const api = require('./quiz_routes/index.js');
// const page = require('./quiz_routes/index.js')

const Quiz = require("./models/Quiz.js");
const sequelize = require("./config/connection");
const routes = require('./controllers/index.js');
// ? Sets up the Express App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.use('/api',api);
// app.use('/page',page);

app.use(routes);

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/homepage'));
//app.use(require('./controllers/quiz-routes'));

app.set("views", path.join(__dirname, "views"));

// app.use(require('./controllers/sql-routes'));


// ? Starts the server to begin listening

// app.listen(PORT, () => {
//   console.log('Server listening on: http://localhost:' + PORT);
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

//my repo 6/14/2024 16:15