# Fazendo um docker exemplo para uma aplicação em node
FROM node:latest 
MAINTAINER Paulo Ricardo
#criar uma variavel
ENV PORT=3000
COPY . /var/www
WORKDIR /var/www 
RUN npm install 
ENTRYPOINT npm start
EXPOSE $PORT
#docker build -f Dockerfile -t pauloricardo/node .
#docker run -d -p 8080:3000 douglasq/node