const mongoose=require('mongoose');
const mongoDebug=require('debug')('app:mongodb')
require('dotenv/config');


module.exports=()=>{
    
if(process.env.NODE_ENV==="production"){
    mongoose.connect(process.env.PROD_DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() =>{ mongoDebug('connect mongodb ....') })
    .catch((error)=>{
        mongoDebug(`couldn't connect mongodb ${error}`)
    })
}
else{
    console.log(process.env.DEV_DB)
    mongoose.connect(process.env.DEV_DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
 .then(() =>{ mongoDebug('connect mongodb ....') })
    .catch((error)=>{
      console.log(`couldn't connect mongodb ${error}`)
    })

}
}