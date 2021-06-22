FROM node:14.17.0 as node

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

FROM cypress/included:10
COPY --from=node /app .
CMD "yarn" "test:ci"