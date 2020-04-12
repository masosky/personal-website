FROM node:10.16.3 as build-deps
WORKDIR /usr/src/app
#COPY package.json yarn.lock ./
COPY package.json gatsby-config.js ./
COPY src/ ./src/
COPY static/ ./static/
RUN yarn global add gatsby-cli 
RUN yarn
RUN yarn clean
RUN yarn build

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]