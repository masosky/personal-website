FROM node:10.16.3 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn clean
RUN yarn build

#FROM nginx:1.12-alpine
#COPY --from=build-deps /usr/src/app/public /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
CMD ["yarn", "serve"]