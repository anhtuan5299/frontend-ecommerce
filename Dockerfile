# syntax=docker/dockerfile:1

FROM node:16.15.0
WORKDIR /usr/app
COPY package.json /usr/app
RUN npm install --quiet
COPY . /usr/app