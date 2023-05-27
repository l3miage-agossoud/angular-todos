FROM node:18.14.2 as node
WORKDIR /angular-todos
COPY package*.json /angular-todos/
RUN npm install
COPY ./ /angular-todos/
RUN npm run build -- --prod

FROM nginx:1.13
COPY --from=node /angular-todos/dist/Angular-todos /usr/share/nginx/html
