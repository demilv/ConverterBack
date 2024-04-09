const Converter = require("../models/converter.model")

const getAllConverters = async(req, res) =>{
    try{
        const allConverters = await Converter.find()
        return res.json(allConverters)
    }catch(error){
        console.log(error);
    }
};

const postConverter = async(req,res) =>{
    try{
        const newConverter = new Converter(req.body);
        const createdConverter = await newConverter.save()
        try {
            console.log("datos de la conversion:", req.body); 
        } catch (error) {
            
        }
        return res.status(200).json(createdConverter);    
    }catch(error){
        return res.status(500).json(error)
    }
}

const deleteConverter = async(req, res) =>{
    try {
        const {id} = req.params
        const deleteConverter = await Converter.findByIdAndDelete(id);
        if(!deleteConverter){
            return res.status(404).json({message: "No existe el registro"})
        }
        return res.status(200).json(deleteConverter)
    }catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllConverters, postConverter, deleteConverter}