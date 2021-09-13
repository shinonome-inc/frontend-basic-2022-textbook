FROM node:14-buster-slim

#apt packages
RUN apt-get update && \
  apt-get install -y --no-install-recommends \
  git \
  curl \
  ca-certificates \
  sudo \
  openjdk-11-jre \
  build-essential && \
  apt-get -y clean

#firebase
RUN curl -sL firebase.tools | bash
