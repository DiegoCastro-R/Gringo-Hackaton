FROM node:20.9

EXPOSE 3000

RUN mkdir -p webapp
ADD ./srcs /webapp
WORKDIR /webapp
RUN npm install

ENTRYPOINT [ "npm", "start" ]