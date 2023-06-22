#FROM node:16-alpine
#
#WORKDIR /app
#
#COPY . .
#
#RUN npm ci
#RUN npm run build
#
#ENV NODE_ENV production
#
#EXPOSE 3000
#
#CMD [ "npx", "serve", "build" ]


FROM nginx:1.21-alpine

COPY default.conf /etc/nginx/conf.d/default.conf

COPY build /usr/share/nginx/html

RUN chmod 777 -R /usr/share/nginx/html

CMD ["nginx", "-g daemon off;"]
