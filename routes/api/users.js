const router = require('express').Router();
const bcrypt = require('bcryptjs')
const {check,validationResult} = require('express-validator');
const { min } = require('moment');
const moment = require('moment');
const jwt = require('jwt-simple')
const {Users} = require('../../db')


router.get('/',async (req,res)=>{
    // res.send("primer endpoint")
    const user = await Users.findAll()
    res.json(user)
})

router.post('/register',[
    check('usuario',"El nombre de usuario es obligatorio").not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    check('correo',"El email debe estar correcto").isEmail()
],async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({error:errors.array()})
    }
    const {
        nombre ,
        usuario,
        password,
        correo,
    } = req.body
    const userNew = Users
    userNew.nombre = nombre
    userNew.usuario = usuario
    userNew.password = bcrypt.hashSync(password, 10)
    userNew.correo = correo
    const users = await Users.create(userNew);
    res.json(users);
})

router.post('/login',async (req,res)=>{
    const {username,password} = req.body

    const existe = await Users.findOne({where:
        {
            usuario:username
        }
        })

        if(existe){
            const isPassword =  bcrypt.compareSync(password, existe.password);
            if(!isPassword){
                return res.status(404).json({message:"Contraseña incorrecta"});
            }
    
        } else{
            return res.status(404).json({message:"Error en usuario y/o contraseña"})

        }

       

        return res.json({token:crearToken(existe)})

})
const crearToken= (user)=>{
    const body = {
        user: user.id,
        createdAt : moment().unix(),
        expiredAt : moment().add(60, 'minutes').unix()
    }
    return jwt.encode(body,"frase")
}

module.exports = router;