const ctrlDatos = require('../controlador');
const express = require('express');
const https = require('https');

const { body, param, validationResult } = require('express-validator');
var router = express.Router()


router.get('/api',ctrlDatos.findDatos);

router.get('/nasa/:date', [
    param('date').not().isEmpty(),
   ], (req, res) => {
    //var API_KEY=nJkojeS4XQco35MZIiN4oe7XDri7zNE0wxiHf89v;
    console.log(req.params.date);
    var link='https://api.nasa.gov/planetary/apod?api_key=nJkojeS4XQco35MZIiN4oe7XDri7zNE0wxiHf89v&date='+req.params.date
    
    console.log(link);
    https.get(link, (resp) => {
    let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
      
    console.log(JSON.parse(data).explanation);
    res.json(data);
  });
  

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    res.json({success:false,err:JSON.stringify(errors)})
    return
    };
});



module.exports=router;