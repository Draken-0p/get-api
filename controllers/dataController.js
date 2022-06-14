const file = require("../models/dataModel");





const getfile = async(req,res)=>{
    try{ 
        file.find({file}).then(async(result)=>{
        res.status(200).send(result);
        })
   } catch (error){
    res.status(400);
    throw new Error(error.message);
    } 
}

const getfileById = async(req,res)=>{
    try{ 
        file.findOne({name: req.params.id}).then(async(result)=>{
        res.status(200).send(result);
        })} catch (error){
        res.status(400);
        }
}


module.exports = {getfile ,getfileById}