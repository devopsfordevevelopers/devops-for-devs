FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8090

CMD ["npm", "start"]