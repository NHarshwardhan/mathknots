const User = require('../model/User');

const router = require('express').Router();


router.get('/registered_users',async(req,res)=>{
   
    const result = await User.find()
    res.send(result)
      
})

router.post('/registered_users',async(req,res)=>{
   
    const newBook= new User(req.body)

    try{
    const savedUser = await newBook.save();
    //    res.send(savedUser);
        res.send({'info':'Record Added Succeffully'});
    }
    catch(err){
        res.status(400).send(err);
    }    
})

router.put('/registered_users/:id',async(req,res)=>{

    const foundRecord= await User.findById({ _id: req.params.id })
   
    try{
    const savedUser = await foundRecord.updateOne(req.body);
    //    res.send(savedUser);
        res.send({'info':'Record updated Succeffully'});
    }
    catch(err){
        res.status(400).send(err);
    }    
})

router.delete('/registered_users/:id',async(req,res)=>{

    const foundRecord= await User.findById({ _id: req.params.id })
   
    try{
        await foundRecord.deleteOne(foundRecord)
        res.send({info:'Record deleted Successfully'})
     }
     catch(err){
         res.status(400).send(err)
     }  
})



module.exports = router;