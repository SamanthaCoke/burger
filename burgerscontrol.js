var express = require('express');
var router = express.Router();
var burgers = require('../burger/server.js');

router.get('/burgers', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject)
    });
});
