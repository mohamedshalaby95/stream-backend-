const {Stream,Streamvalidate}=require('../models/stream')
const mongoose=require('mongoose')

const express=require('express');
const router=express.Router();

router.get('/', async(req,res)=>{
    const stream =await Stream.find().sort('title')
    res.send(stream)
})
router.get('/:id', async(req,res)=>{
    const stream =await Stream.findById(req.param.id)
    res.send(stream)
})
router.post('/', async(req,res)=>{
   

   const {error}=Streamvalidate(req.body)
 
   if(error){
       
      console.log(error.details[0].message)
       res.status(400).send("you should sign in before create stream")
   }else{
    console.log(typeof(req.body.userId))
    const stream=  new Stream({title:req.body.title,description:req.body.description,userId:req.body.userId});
    const result=await stream.save();
    res.send(result)
   }

   
})
router.delete('/:id', async(req,res)=>{
 if( !mongoose.Types.ObjectId.isValid(req.params.id ) ) return res.status(400).send(' this id not valid');

const stream= await Stream.findOneAndDelete({ _id: req.params.id })

if(!stream){
res.status(400).send('this stream not found')
}else{
    res.send(stream)
}




})
router.put('/:id', async(req,res) =>{
    console.log(req.params.id)
    const {error}= Streamvalidate(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
    }

 const streamedit= await Stream.findByIdAndUpdate(req.params.id,{title:req.body.title,description:req.body.description})
 if(!streamedit){
    res.status(400).send('this stream not found')
    }else{
        res.send(streamedit)
    }
})
module.exports=router;