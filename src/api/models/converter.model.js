const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const converterSchema = new Schema(
    {
        valorOriginal: {type: Number, required: true},
        resultado:{type: Number, required: true},
        tipo1: {type: String, required: true},       
        tipo2: {type: String, required: true},        
    },{
        timestamps: true
    }
)

const Convert = mongoose.model('Converter', converterSchema);
module.exports = Convert;