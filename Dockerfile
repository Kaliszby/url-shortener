FROM node:alpine AS development

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ARG MONGO_URI=mongodb+srv://summer:%2155%4055summer@cluster0.oumzn.mongodb.net/
ENV NODE_ENV=${NODE_ENV}
ENV MONGO_URI=${MONGO_URI}

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

COPY --from=development /usr/scr/app/dist ./dist

CMD ["node", "dist/main"]
