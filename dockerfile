FROM node:18.17.1-alpine as build

ARG PORT
ARG DATABASE_URL

ENV PORT ${PORT}
ENV DATABASE_URL ${DATABASE_URL}

WORKDIR /server

COPY . .
COPY package.json ./
COPY tsconfig.json ./

RUN npm install

RUN npm run tsc

COPY . .

EXPOSE ${PORT}

CMD ["npm", "run", "start:prod"]
# docker build -t arp:arp .
