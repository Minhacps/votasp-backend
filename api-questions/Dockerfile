FROM node:10-alpine as build

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
RUN npm install --only=prod
COPY src/ /app/src

FROM node:10-alpine as prod

COPY --from=build /app/ /app/
WORKDIR /app

CMD ["npm", "start"]
