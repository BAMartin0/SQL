// ? Dependencies
const express = require('express');
const path = require('path');
// ? Import express-handlebars
const exphbs = require('express-handlebars');//..................................................trial
const hbs = exphbs.create({});//..................................................................trial
const PORT = 3001;
const api = require('./routes/index.js');
// ? Sets up the Express App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',api);
app.use(express.static('public'));
//const PORT = process.env.PORT || 3001;

// ? Describe what the following two lines of code are doing.
// ? The following two lines of code are setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);//....................................................................trial
app.set('view engine', 'handlebars');//....................................................................trial

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,'/public/index2.html'));
});

// app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/sql-routes'));//.............................................trial

// ? Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
