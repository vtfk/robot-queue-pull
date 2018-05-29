<<<<<<< HEAD
# Setting the base to nodejs 10
FROM mhart/alpine-node:10

# Maintainer
MAINTAINER Geir Gåsodden
=======
# Setting the base to nodejs 8.10.0
FROM node:8.11.2-alpine@sha256:421ce172099baa5307b46b4bee9c3174deb162a6880e656ddef769869cbe2898
>>>>>>> b518c58e0482565d527443fe20232070e5557398

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Startup
ENTRYPOINT npm start
