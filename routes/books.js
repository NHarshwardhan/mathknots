const Book = require('../model/Book');

const router = require('express').Router();


router.get('/books',async(req,res)=>{
   
    const result = await Book.find()
    res.send(result)
      
})

router.post('/books',async(req,res)=>{
   
    const newBook= new Book(req.body)

    try{
    const savedUser = await newBook.save();
    //    res.send(savedUser);
        res.send({'info':'Record Added Succeffully'});
    }
    catch(err){
        res.status(400).send(err);
    }    
})

router.put('/books/:id',async(req,res)=>{

    const foundRecord= await Book.findById({ _id: req.params.id })
   
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