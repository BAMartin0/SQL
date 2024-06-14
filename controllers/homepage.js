const router = require('express').Router();
const path = require('path');

router.get('/', async(req, res)=>{
    res.render('quiz');
})

module.exports = router;