FROM mhart/alpine-node:14.17

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR /src

# Install dependencies
RUN npm install --production

# Startup
ENTRYPOINT npm start
