FROM node:10-alpine

ENV TZ=America/Sao_Paulo
RUN echo $TZ > /etc/timezone

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --only=prod

COPY src /usr/src/app/src

CMD ["npm", "start"]
