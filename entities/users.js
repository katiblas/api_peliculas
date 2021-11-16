module.exports = (sequelize,type) =>{

    return sequelize.define('usuarios',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre : type.STRING,
        usuario: type.STRING,
        password: type.STRING,
        correo: type.STRING(150),
        is_active: {type: type.BOOLEAN, defaultValue:1}

    })
}