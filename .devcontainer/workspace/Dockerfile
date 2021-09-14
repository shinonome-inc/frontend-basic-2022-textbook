FROM node:14-buster-slim

#apt packages
RUN apt-get update && \
  apt-get install -y --no-install-recommends \
  git \
  ca-certificates \
  && \
  apt-get -y clean

#gatsby-cli
RUN npm install -g gatsby-cli
