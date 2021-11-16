const personaje = require('./personaje')
module.exports = (sequelize, type) =>{
    sequelize.define('personaje_detalle',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true

        }
        
    })
}
