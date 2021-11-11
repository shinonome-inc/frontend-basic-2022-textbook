FROM node:14-buster-slim

ENV DEBIAN_FRONTEND "noninteractive"

#apt packages
RUN apt-get update && \
  apt-get install -y --no-install-recommends \
  git \
  ssh \
  ca-certificates \
  tar \
  curl \
  && \
  apt-get -y clean

#gatsby-cli
RUN npm install -g gatsby-cli

#add ssh secret-key
COPY .ssh/ /root/.ssh/

#add .bashrc
COPY .bashrc /root/
RUN curl -o "/root/git-prompt.sh" https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh
