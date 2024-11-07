FROM node:20.15.1-alpine

RUN apk add --no-cache xdg-utils

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 6006

CMD ["npm", "run", "storybook", "--", "--no-open"]