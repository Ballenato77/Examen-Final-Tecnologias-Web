const modelDatos= require('./modelo');

const ctrlDatos={
    findDatos: async (req,res) =>{
        const data=await modelDatos.getData();
        console.log(data.data);
        res.json(data.data);
    }
}

module.exports=ctrlDatos;