const router = require('express').Router();

const { application } = require('express');
const apiPersonajes = require('./api/personajes')
const apiPeliculas = require('./api/peliculas')

const apiUsers = require('./api/users')
const middlewares = require("./middlewares")

router.use('/characters',middlewares.checkToken,apiPersonajes)
router.use('/auth',apiUsers)
router.use('/peliculas',middlewares.checkToken,apiPeliculas)



module.exports = router