const mongoose = require ('mongoose');

//el modelo debe ser igual al de la base de datos
const clienteSchema = mongoose.Schema({
    Nombres:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    Apellidos:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    Documento:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    Correo:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    Teléfono:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    Dirección:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

   
},{versionkey:false});

module.exports = mongoose.model('Cliente', clienteSchema);

