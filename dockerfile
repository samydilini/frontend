
FROM node:22-alpine
 
WORKDIR /frontend-app
 
COPY /frontend-app/package.json .
 
RUN npm install
 
COPY frontend-app/ .
 
EXPOSE 3000
 
CMD ["npm", "start"]