const Mkacademy = require('../model/Mkacademy');

const router = require('express').Router();


router.get('/mkacademy',async(req,res)=>{
   
    const result = await Mkacademy.find()
    res.send(result)
      
})

router.post('/mkacademy',async(req,res)=>{
   
    const newBook= new Mkacademy(req.body)

    try{
    const savedUser = await newBook.save();
    //    res.send(savedUser);
        res.send({'info':'Record Added Succeffully'});
    }
    catch(err){
        res.status(400).send(err);
    }    
})

router.put('/mkacademy/:id',async(req,res)=>{

    const foundRecord= await Mkacademy.findById({ _id: req.params.id })
   
    try{
    const savedUser = await foundRecord.updateOne(req.body);
    //    res.send(savedUser);
        res.send({'info':'Record updated Succeffully'});
    }
    catch(err){
        res.status(400).send(err);
    }    
})


module.exports = router;