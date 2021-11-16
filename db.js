const Sequelize = require('sequelize')
const PersonajeModel = require('./entities/personaje')
import {
    DB_DATABASE,
    DB_PASSWORD,
    DB_SERVER,
    DB_USERNAME,
  } from "./config";
const UsersModel = require('./entities/users')
const sequelize = new Sequelize(DB_DATABASE,DB_USERNAME,DB_PASSWORD,{
    host: DB_SERVER,
    dialect: 'mysql'
})

const Personaje = PersonajeModel(sequelize,Sequelize)
const Users = UsersModel(sequelize,Sequelize)

sequelize.sync({force:false})
.then(() => {
    console.log("Sincronizacion correcta")
})
module.exports = {
    Personaje,
    Users
}