FROM node:11.13.0

RUN mkdir -p /usr/src/backend

WORKDIR /usr/src/backend

COPY package.json /usr/src/backend

RUN npm install

COPY . /usr/src/backend

RUN npm run build

CMD ["npm", "start"]

