FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm i
CMD ["node", "server.js"]
EXPOSE 8000