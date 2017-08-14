var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
    if (req.body.email && req.body.password) {
        var myToken = jwt.sign({ email: req.body.email }, 'my test');

        if (myToken) {
            res.status(200).json({
                token: myToken,
                message: 'User was authenticated.'
            })
        } else {
            res.status(400).json({ message: 'Invalid User.' })
        }

    } else {
        res.status(400).json({ message: 'Invalid User.' })
    }
});

router.get('/test', function(req, res, next) {
    res.status(200).json([
        'Ricardo',
        'Ana',
        'Carlos',
        'João'
    ])
});

module.exports = router;
