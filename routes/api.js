const router = require('express').Router();

const { application } = require('express');
const apiPersonajes = require('./api/personajes')
const apiUsers = require('./api/users')
const middlewares = require("./middlewares")

router.use('/characters',middlewares.checkToken,apiPersonajes)
router.use('/auth',apiUsers)



module.exports = router