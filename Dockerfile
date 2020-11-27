FROM node:14.15.1-alpine3.12

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn --frozen-lockfile
COPY . .

ENTRYPOINT [ "yarn", "start" ]