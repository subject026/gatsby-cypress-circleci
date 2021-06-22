FROM cypress/included:7.5.0

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

CMD "yarn test:ci"
