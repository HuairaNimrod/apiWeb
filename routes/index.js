// const routes  = require('express').Router();
// const myControllers  = require('../controllers');
const express = require('express');
const router = express.Router(); // line 1 is a simplified version of this

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

// routes.get('/', myControllers.awesomeFunction);
// routes.get('/awesome', myControllers.returnAnotherPerson);

module.exports = router;