# develop stage
FROM node:lts-alpine as develop-stage
ARG VERSION
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN npm version $VERSION
RUN echo package.json
RUN yarn install
COPY . .
# build stage
FROM develop-stage as build-stage
RUN yarn build
# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]