FROM node:20.9

EXPOSE 3000

RUN mkdir -p webapp
ADD ./srcs /webapp
ADD ./conf/react-config.sh /
RUN chmod +x react-config.sh

ENTRYPOINT [ "bash", "react-config.sh" ]