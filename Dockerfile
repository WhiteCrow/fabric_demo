FROM node:argon

# Install required prereqs.
RUN apt-get -y update && apt-get -y install netcat

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install NodeJS 6.x
# curl -sL https://deb.nodesource.com/setup_6.x | bash -
# apt-get install -y nodejs

# Update npm
RUN npm install -g npm

RUN python --version
RUN which python

# npm config set python 
RUN npm config set python /usr/bin/python

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --quiet

# Bundle app source
COPY . /usr/src/app

CMD ["sh", "./Scripts/docker-startup.sh"]

# Expose the port.
EXPOSE 8080
