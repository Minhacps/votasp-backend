FROM node:10-alpine as build

RUN mkdir -p /app
WORKDIR /app

COPY server.js /app/
COPY package.json /app/
COPY package-lock.json /app/
COPY config /app/config

RUN npm install

FROM node:10-alpine as prod

ENV EG_DISABLE_CONFIG_WATCH=false
WORKDIR /app

COPY --from=build /app /app

CMD ["npm", "start"]
