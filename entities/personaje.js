
module.exports = (sequelize,type) => {
    return sequelize.define('personaje',
    {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagen: type.STRING,
        nombre: type.STRING,
        edad:  type.INTEGER,
        peso :  type.STRING,
        historia : type.STRING,
        is_active : {type: type.BOOLEAN,defaultValue: true}

    })
}