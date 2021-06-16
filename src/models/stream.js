const Joi= require('joi');
const {Schema,  model}=require('mongoose');

const Stream=model('Stream',new Schema({
    title:{type:String,require:true,miniLenght:3,trim:true},
    description:{type:String,require:true,miniLenght:3,trim:true},
    userId:{type:String,require:false}
}))

function streamvalidate(stream){
    const schema= Joi.object({
        title: Joi.string().min(3).required(),
        description: Joi.string().min(3).required(),
        userId:Joi.string()
       
    })
   return  schema.validate(stream)
}

module.exports={

    Stream:Stream,
    Streamvalidate:streamvalidate
}
