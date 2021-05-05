const path = require('path');

const mainController = {
    catshop: (req,res) => {
        res.sendFile(path.resolve('views/catshop.html'));
    },
    //ingresar el controlador que envia la peticion a la vista de dog shop
    //ingresar el controlador que envia la peticion a la vista de bird shop
}

module.exports = mainController