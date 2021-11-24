const Sequelize = require('sequelize')
const PersonajeModel = require('./entities/personaje')
const PeliculaModel = require('./entities/peliculas')
require("dotenv").config();


const UsersModel = require('./entities/users')
const sequelize = new Sequelize(process.env.DB_DATABASE,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host: process.env.DB_SERVER,
    dialect: 'mysql'
})

const Personaje = PersonajeModel(sequelize,Sequelize)
const Peliculas = PeliculaModel(sequelize,Sequelize)
const Users = UsersModel(sequelize,Sequelize)

sequelize.sync({force:false})
.then(() => {
    console.log("Sincronizacion correcta")
})
module.exports = {
    Personaje,
    Peliculas,
    Users
}