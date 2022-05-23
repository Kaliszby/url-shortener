FROM node:alpine AS development

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

COPY --from=development /usr/scr/app/dist ./dist

CMD ["node", "dist/main"]
