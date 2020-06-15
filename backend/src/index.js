const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://david:boku2019@cluster0-phray.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors()); //caso queira permitir acesso a uma porta especifica use{ origin:'https://localhost: numeroDaPorta' }
app.use(express.json());
app.use(routes);

server.listen(3333);

//METODOS HTTP: GET, POST, PUT, DELETE

//Tipo de parametros

//Query Params: resquest.query(filtro, ordenação, paginação...)
//Route params: request.params(indetificar um recurso na alteração ou remoção)
//Body: request.body(dados para a criação ou alteração de registros)

//MongoDB (não-relacional)