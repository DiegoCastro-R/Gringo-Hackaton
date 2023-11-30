FROM node:20.9

RUN npm install -g truffle

RUN mkdir -p /myproject
ADD ./conf /myproject
RUN mkdir -p /myproject/app
ADD ./app /myproject/app

RUN chmod +x /myproject/truffle-config.sh
WORKDIR /myproject/app

ENTRYPOINT [ "bash", "/myproject/truffle-config.sh" ]