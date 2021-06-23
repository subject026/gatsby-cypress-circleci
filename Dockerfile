FROM cypress/included:7.5.0

WORKDIR /app

COPY . .

RUN yarn

CMD "yarn test:ci"
