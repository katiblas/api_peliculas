const router = require('express').Router();

const {Personaje} = require('../../db')


router.get('/',async (req,res)=>{
    // res.send("primer endpoint")
    const personajes = await Personaje.findAll()
    res.json(personajes)
})

router.post('/',async(req,res)=>{
    const personajes = await Personaje.create(req.body);
    res.json(personajes);
})

router.put('/:id',async(req,res)=>{
    const personajeId = await Personaje.findOne({where: {id:req.params.id}})
    if(!personajeId){
        return res.json({message:"El personaje no existe"})
    }
    await Personaje.update(req.body, {
        where: {id: req.params.id}
    })
    return res.json({message:"Modificado correctamente"})
    
})

router.delete('/:id',async(req,res)=>{
    const personajeId = await Personaje.findOne({where: {id:req.params.id}})
    if(!personajeId){
        return res.json({message:"El personaje no existe"})
    }
    await Personaje.update({is_active:false }, {
        where: {id: req.params.id}
    })
    return res.json({message:"Modificado correctamente"})
    
})
module.exports = router;