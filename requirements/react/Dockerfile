FROM node:20.9

EXPOSE 3000
RUN npm install -g ethers

WORKDIR webapp
RUN npm update

ENTRYPOINT [ "npm", "start" ]