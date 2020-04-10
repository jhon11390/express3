const express = require('express');
const app = express();


app.get('/makers/:nombre', (req, res) => {
    if(req.params.nombre){
        res.send('<h1>Hola '+ req.params.nombre[0].toUpperCase() + req.params.nombre.slice(1) +'!</h1>');
    } else {
        res.send('<h1>Hola desconocido!</h1>');
    }
});

app.listen(3000, () => console.log('Listening on port 3000!'));