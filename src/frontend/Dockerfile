# imagem oficial do Node.js como imagem base
FROM node:16-alpine as build

# diretório de trabalho dentro do contêiner
WORKDIR /app

# package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# instalando as dependências do projeto
RUN npm install

# copiando todo o código fonte da aplicação para o diretório de trabalho
COPY . .

# compilando a aplicação React
RUN npm run build

# usando uma imagem do Nginx para servir a aplicação
FROM nginx:alpine

# copiando os arquivos compilados para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# expondo a porta 80 para acessar a aplicação
EXPOSE 80

# iniciando o Nginx
CMD ["nginx", "-g", "daemon off;"]