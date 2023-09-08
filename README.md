# Server node express robusto com upload de imagens para o cloudinary

# Clonar o repositório

Para começar, siga estas etapas para clonar este repositório em seu ambiente local:

git clone https://github.com/wilton-santana-jr/server-node-express-with-cloudinary
cd server-node-express-with-cloudinary

Certifique-se de que voce tem o Node.js e o npm instalados em seu sistema operacional.

Use o comando abaixo para instalar as dependências do seu projeto.

npm install

# Crie um arquivo na raiz do projeto chamado .env e configure o arquivo .env em um editor de texto para adicionar as variáveis de ambiente do cloudinary

cloud_name='<seu nome do cloudinary>' 
api_key='<sua api key do cloudinary>' 
api_secret='<sua secret api do cloudinary>' 

# Executando o aplicativo no terminal de dentro do diretorio raiz do projeto
npm start
    ou
nodemon index
