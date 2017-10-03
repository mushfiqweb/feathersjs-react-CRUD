# feathersjs-student-CRUD


## Introduction
This a basic crud react-redux crud application. It currently uses mongodb for the server and featherjs as the rest backend server.

##  How to install

```bash
git clone https://github.com/mushfiqrs/feathersjs-student-CRUD.git
cd feathersjs-student-CRUD

# Install frontend dependencies
npm install

# Install backend dependencies
cd apiServer
npm install
```


## How to run
Check mongodb url in config

### Start the backend server
Start the backend server first:

```bash
cd feathersjs-student-CRUD/apiServer
npm start
```
This will run the backend server at localhost:3931. If all is working well, you should be able to access the url http://localhost:3931/students from your Browser or Postman

### Start the client
Open a separate terminal to start the client:

```bash
cd feathersjs-student-CRUD
npm start
```

Your default web browser will be launched automatically with the url http://localhost:3215
