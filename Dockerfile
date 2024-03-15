FROM node:latest as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:latest as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

ENV SAMPLE_ENV=1234abcd 

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 8080

CMD [ "node", "dist/index.js" ]

