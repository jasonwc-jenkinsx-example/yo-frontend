FROM node:11.13.0 as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . ./
RUN npm run build

FROM nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
