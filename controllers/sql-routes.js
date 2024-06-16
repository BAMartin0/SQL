
const router = require('express').Router();

// ? Add a comment describing the purpose of the 'get' route
// ? GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
  // ? Add a comment describing the purpose of the render method
  // ? This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
  res.render('quiz');
});

module.exports = router;