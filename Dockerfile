FROM node:7
run mkdir /practice_docker
ADD . /practice_docker
WORKDIR /practice_docker
RUN npm install
EXPOSE 80
CMD ["npm", "start"]
