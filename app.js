const express = require('express');
const app = express();
const cloudinary = require('cloudinary').v2
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//cloudinary.config({ 
//  cloud_name: '', 
//  api_key: '', 
//  api_secret: '' 
//});
//console.log('variaveis de ambiente');
//console.log(process.env.api_secret);
//console.log(process.env.api_key);
//console.log(process.env.cloud_name);

cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.api_key, 
  api_secret: process.env.api_secret 
});

  
//app.use((request, response) => {
//   response.json({ message: 'Olá! Este é seu servidor express que atenderá suas requisições!' }); 
//});

// endpoint da api para mostrar uma mensagem que o servidor está atendendo requisições
app.get("/", (request, response) => {
    response.json({ message: "Olá! Este é seu servidor express que atenderá suas requisições!" });
});

app.get("/about", (request, response) => {
    response.json({ message: `Olá! Aqui está um teste do endpoint about! - cloud_name: ${process.env.cloud_name} - api_key: ${process.env.api_key}, api_secret: ${process.env.api_secret} ` });
});

// endpoint da api para upload de uma imagem no cloudinary
app.post("/upload-image", (request, response) => {
	
	// collected image from a user
    const data = {
      image: request.body.image,
    }

    // upload da imagem aqui
    cloudinary.uploader.upload(data.image)
    .then((result) => {
      response.status(200).send({
        message: "success",
        result,
      });
    }).catch((error) => {
      response.status(500).send({
        message: "failure",
        error,
      });
    });
	
	
});

module.exports = app;
