# feathersjs-react-CRUD


## Introduction
This a basic crud react-redux crud application. It currently uses mongodb for the server and featherjs as the rest backend server.

##  How to install

```bash
git clone https://github.com/mushfiqweb/feathersjs-react-CRUD.git
cd feathersjs-react-CRUD

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
cd feathersjs-react-CRUD/apiServer
npm start
```
This will run the backend server at localhost:3931. If all is working well, you should be able to access the url http://localhost:3931/students from your Browser or Postman

### Start the client
Open a separate terminal to start the client:

```bash
cd feathersjs-react-CRUD
npm start
```

Your default web browser will be launched automatically with the url http://localhost:3215

### Change SMTP Settings
Open this file feathersjs-react-CRUD\apiServer\src\services\mailer\mailer-hooks.js and change the following settings to your own.

```bash
// change the user and pass !
var transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'hello@hello.com',
      pass: 'pass'
    }
});
```

## Used Libraries
* [Feathers - An open source REST and realtime API layer for modern applications.](https://feathersjs.com/)
* [Semantic UI React - The official Semantic-UI-React integration.](https://react.semantic-ui.com/introduction)
* [Ant Design of React.](https://ant.design/docs/react/introduce)


<a href="https://www.buymeacoffee.com/6RvYw3S"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"  target="_blank"></a>
