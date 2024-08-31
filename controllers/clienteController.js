const Cliente = require('../models/Cliente');

//funcion para buscar los clientes que estan en la base

exports.buscarClientes = async(req, res) => {
    try {
        
        const cliente = await Cliente.find();
        res.json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar lo clientes')        
    }
}

//funcion agregar clientes
exports.agregarClientes = async(req, res ) =>{

    try {
        let cliente;
        cliente = new Cliente(req.body)
        await cliente.save();
        res.json(cliente);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar cliente');
        
    }
}

//funcion para mostar un solo cliente
exports.buscarCliente = async(rq, res) =>{

    try {
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).send({msg:"cliente no encontrado con ese ID"});
            return
        }
        res.json(cliente);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar cliente');
        
    }
}

// funcion eliminar clientes

  exports.eliminarClientes = async(req, res) => {
      try {
        let cliente = await Cliente.findById({_id: req.params.id});
        if(!cliente){
          res.status(404).json({msg:"el cliente no existe"})
          return
        }  
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El cliente ha sido eliminado"});
        return
      
      } catch (error) {
          console.log(error)
          res.status(500).send('hubo un error al eliminar un cliente');
 
      }
  }

  //funcion para actualizar un cliente
  exports.actualizarCliente = async(req, res) => {
    try {
        const {Nombres, Apellidos, Documento, Correo, Teléfono, Dirección} = req.body
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg: "el cliente no existe"});
            return
        }
        cliente.Nombres = Nombres;
        cliente.Apellidos = Apellidos;
        cliente.Documento = Documento;
        cliente.Correo = Correo;
        Cliente.Teléfono = Teléfono;
        cliente.Dirección = Dirección;

        cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente, {new:true});
        res.json(cliente);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al actualizar un cliente');
        
    }
  }