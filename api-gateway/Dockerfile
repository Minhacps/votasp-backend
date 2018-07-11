FROM node:10-alpine

RUN apk add --update --no-cache wget

RUN mkdir -p /app
WORKDIR /app

COPY entrypoint.sh /usr/bin/entrypoint.sh
COPY server.js /app/
COPY package.json /app/
COPY package-lock.json /app/
COPY config /app/config

RUN npm install
RUN npx eg plugins install express-gateway-plugin-rewrite
ENV EG_DISABLE_CONFIG_WATCH=true
WORKDIR /app

ENTRYPOINT ["/bin/ash", "/usr/bin/entrypoint.sh"]
CMD ["npm", "start"]
