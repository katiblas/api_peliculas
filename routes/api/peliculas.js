const router = require('express').Router();

const {Peliculas} = require('../../db')

router.get('/',async (req,res)=>{
    // res.send("primer endpoint")
    const peliculas = await Peliculas.findAll()
   return  res.json({peliculas})
})

router.post('/',async(req,res)=>{
    console.log(req.body)
    const pelis = await Peliculas.create(req.body);
   return  res.json({pelis});
})

router.put('/:id',async(req,res)=>{
    const peliculaId = await Peliculas.findOne({where: {id:req.params.id}})
    if(!peliculaId){
        return res.json({message:"La pelicula no existe"})
    }
    await Peliculas.update(req.body, {
        where: {id: req.params.id}
    })
    return res.json({message:"Modificado correctamente"})
    
})

router.delete('/:id',async(req,res)=>{
    const peliculaId = await Peliculas.findOne({where: {id:req.params.id}})
    if(!peliculaId){
        return res.json({message:"La pelicula no existe"})
    }
    await Peliculas.update({is_active:false }, {
        where: {id: req.params.id}
    })
    return res.json({message:"Modificado correctamente"})
    
})
module.exports = router;