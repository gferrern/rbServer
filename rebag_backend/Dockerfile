FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

COPY package.json /home/node/api/package.json 
WORKDIR /home/node/api
USER node

RUN npm install
RUN pip3 install stripe
COPY --chown=node:node . .

EXPOSE 3000

COPY ./docker-sequelize.sh /docker-sequelize.sh
USER root
RUN ["chmod", "+x", "/docker-sequelize.sh"]

ENTRYPOINT ["/docker-sequelize.sh"]
