FROM  huecker.io/library/node:18-alpine

USER root
WORKDIR /var/www/rh_backend/app

COPY --chown=root:root package*.json tsconfig.json tsconfig.build.json nest-cli.json /var/www/rh_backend/app/ 
# RUN npm install -g @nestjs/cli
RUN npm install 
# RUN npm i --only=develepment
COPY src /var/www/rh_backend/app/src
RUN npm run build
# CMD [ "npm", "run", "start:dev" ]