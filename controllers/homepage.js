const router = require('express').Router();

router.get('/', async(req, res)=>{
    res.render('quiz');
})

module.exports = router;