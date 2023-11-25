FROM node:20.9

RUN npm install -g ganache

ADD ./conf /ganache-server

EXPOSE 8545

WORKDIR /ganache-server
RUN chmod +x /ganache-server/ganache-config.sh
ENTRYPOINT [ "bash", "ganache-config.sh" ]