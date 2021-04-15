const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');

const CarSchema = new mongoose.Schema({
    veiculo: {
        type: String
    },
    marca: {
        type: String
    },
    ano: {
        type: Number
    },
    descricao: {
        type: String
    },
    vendido: {
        type: Boolean,
        default: false
    }
}, 
{
    timestamps: true
});

CarSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Car', CarSchema);