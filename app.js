const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('server on port 3000');
});

app.get('/', (req , res) => {
    res.send('index page');
});

//randomNumber API
//localhost:3000/random/30/50
//localhost:3000/random/3dfsaf/50
app.get('/random/:numeroInicial/:numeroFinal', (req , res) => {
    //type of data: string, number?
    //console.log(typeof req.params.numeroInicial);
    //console.log(typeof req.params.numeroFinal);    
    const min = parseInt(req.params.numeroInicial);
    const max = parseInt(req.params.numeroFinal);
    //console.log(typeof min);
    //const result = Math.random() * (max - min) + min;
    //const result = Math.floor(Math.random() * (max - min) + min);
    //console.log(result);
    
    //JSON
    //res.json({"randomNumber": result});   
    //Validar Resultado, si envia string y number debe generar un error 
    if (isNaN(min) || isNaN(max)){
        //estado error = 404 
        res.status(404);
        res.json({"error": 'Bad request'});
        return;
    };
    const result = Math.floor(Math.random() * (max - min) + min);
    res.json({"randomNumber": result});   
});


app.post('/', (req , res) => {
    res.send('guardando');
});

app.put('/', (req , res) => {
    res.send('actualizando');
});

app.delete('/', (req , res) => {
    res.send('eliminando');
});



