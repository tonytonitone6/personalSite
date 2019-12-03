FROM node:11.13.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

RUN npm run prod

EXPOSE 3000:3000

CMD ["node", "server.js"]

