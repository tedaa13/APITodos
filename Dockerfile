FROM node:lts-alpine3.20

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

CMD ["node", "server.js"]

EXPOSE 3000