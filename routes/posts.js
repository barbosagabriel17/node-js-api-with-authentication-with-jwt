const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts: 
            {title: 'My first post', description:'Random data you should not access without being logged'}
        });
    console.log(req.user); //At verify token we are defining the req.user//// kind of findByOne(req.user)
})

module.exports = router;