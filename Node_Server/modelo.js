const axios=require('axios');

const modelDatos={
    getData: async() =>{
        return await axios.get('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
        .then(data=> data)
        .catch(err=>{console.log(err); return err})
    }
}

module.exports=modelDatos;