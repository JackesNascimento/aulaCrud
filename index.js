const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;

//CONFIGURAÇÃO DO HANDLEBARS
app.engine('hbs', hbs.engine({
    extname: 'hbs', //Define a extenssão
    defaultLayout: 'main' // Arquivo Principal do Layout
})); app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
    res.render('index',{title:'Minha Primeira pagina com NodeJs', logo:'./assets/logo.png'});
})

app.listen(PORT, ()=>{
    console.log(`Servidor Rodando em http://192.168.12.6:${PORT}`);
})