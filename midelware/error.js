module.exports=(err,req,res,next)=>{
res.status(500).send(`something is fail ${err}`)

}