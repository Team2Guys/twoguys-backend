FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma

COPY . .

RUN npm install

RUN npx prisma generate

RUN npm run build

CMD ["npm", "run", "start:prod"]
