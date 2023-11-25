FROM node:20.9

RUN npm install -g truffle

ADD ./conf /myproject

EXPOSE 7545

WORKDIR /myproject
RUN chmod +x /myproject/truffle-config.sh
ENTRYPOINT [ "bash", "truffle-config.sh" ]