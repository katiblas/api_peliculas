const moment = require('moment')
const jwt = require('jwt-simple')

const checkToken = (req,res,next) =>{

const token = req.headers['user-token'];
console.log(token)
    if(!token){
        return res.json({message:"Debe incluir en la cabecera 'user-token' "})
    }
    const tokenDecode = jwt.decode(token,'frase')
    if(!tokenDecode){
        return res.status(404).json({message:"Token invalido"})
    }

    if(token.expiredAt < moment().unix()){
        return res.status(404).json({message:"El token expiró"})

    }

    req.user = token.user

    next()
}

module.exports = {
    checkToken : checkToken
}