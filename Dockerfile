FROM node:16.13-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --save --legacy-peer-deps
COPY . .

RUN npm run build -- --prod

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/angular-donation-registry-app /usr/share/nginx/html