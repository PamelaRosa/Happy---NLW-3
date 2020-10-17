import express from 'express';
import path from 'path';

import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json()); //Para utilizar o json na aplicação
app.use(routes); //tem que ser depois do express
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); // Para acessar as imagens atraves da url criada

app.listen(3333);


// Rota = conjunto
// Recurso = usuário

//Métodos HTTP = GET, POST, PUT, DELETE
//Parâmetros

//GET = Buscar uma informação (Lista, item)
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

// 3 Parametros principais:
//Query Params: http://localhost:3333/users?search=pamela --> serve para filtrar uma busca, no caso, por usuarios que tenham pamela no nome.
//o parametro é o search
//Route Params: http://localhost:3333/users/1 --> Identificar um recurso -- necessario para o put e delete, identificando o usuario pelo ID, por exemplo.
//Body (corpo da requisição -> serve para enviar dados que não caibam nos outros params, que são, geralmente, vindos de formularios):
// http://localhost:3333/users --> Identificar um recurso


//Existem tres formas de lidar com o banco de dados dentro da aplicaçã node:
//Driver nativo, Query builder e ORM ( esse será utilizado)

//Driver nativo não permite abstrações, a escrita é como em um banco de dados;
//Query builder, permite uma sintaxe do banco de dados em javascript, é literalmente um construtor de queries;
//ORM tem o maior nivel de abstração, por exemplo, users (tabela no banco) --> User (classe), relacionamento de objeto
//Assim 3 users (tabela), terá 3 instâncias User(classe - objeto), cada ação na Classe reflete nas tabelas do banco de dados.