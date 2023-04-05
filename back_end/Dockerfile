FROM node:latest

WORKDIR  /app

EXPOSE 3000

COPY package*.json ./

RUN npm install

RUN npm run build


CMD ["node", "srcs/main.js"]
#lance la version prod

#pour lancer la version dev
#command: sh -c "npm install; npm run start:dev"