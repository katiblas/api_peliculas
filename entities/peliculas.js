module.exports = (sequelize, type)=>{
        sequelize.define('peliculas',{
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoincrement:true
            },
            imagen: type.STRING,
            titulo: type.STRINGM,
            calificacion: type.INTEGER(5),
            is_active:{
                type: type.BOOLEAN,
                defaultValue: true
            }
                
        })
}

