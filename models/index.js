const User = require('./user');
const Questions = require('./questions');
const Answers = require('./answers');

User.hasMany(Questions, {

});

Questions.belongsTo(User, {

}); 

User.hasMany(Answers, {

}); 

Answers.belongsTo(User, {

}); 