FROM node
RUN npm -g install create-react-app
COPY . ./cep
WORKDIR /cep
RUN npm install
ENTRYPOINT [ "npm", "start" ]