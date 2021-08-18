const express = require('express');
const path = require('path');

const app = express();

//Declarando la ruta a la carpeta public
const publicPath = path.resolve(__dirname,'./public');

//Levantando el servidor en express
app.listen(process.env.PORT || 3000, (req,res) => {
    console.log("Server running on port 3000")
});

//Declarando el uso de archivos estáticos
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});
