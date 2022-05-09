const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:gabi1205@fiaptecnico.uzpbf.mongodb.net/Fiap?retryWrites=true&w=majority')
}

module.exports = conexao
