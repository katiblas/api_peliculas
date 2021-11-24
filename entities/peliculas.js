module.exports = (sequelize,type) => {
    return sequelize.define('peliculas',
    {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            imagen: type.STRING,
            titulo: type.STRING,
            calificacion: type.INTEGER(5),
            is_active : {type: type.BOOLEAN,defaultValue: true}
        })
    }

