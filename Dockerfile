FROM node:alpine

EXPOSE 9898

WORKDIR /app

COPY . .

CMD node server.js