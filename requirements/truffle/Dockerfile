FROM node:20.9

RUN npm install -g truffle
RUN npm install -g @truffle/hdwallet-provider

ADD ./conf /myproject

WORKDIR /myproject
RUN chmod +x /myproject/truffle-config.sh
ENTRYPOINT [ "bash", "truffle-config.sh" ]