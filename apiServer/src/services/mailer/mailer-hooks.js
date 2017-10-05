
'use strict';
const sgMail = require('@sendgrid/mail');
const mailSettings = require('./mail-settings');
const nodemailer = require('nodemailer');


module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [
            function (hooks) {

                //sendMail('OK');

                // Create the transporter with the required configuration for Gmail
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

                // setup e-mail data, even with unicode symbols
                var mailOptions = {
                    from: '"mushfiqurs blog" <hello@mushfiqurs.com>', // sender address (who sends)
                    to: hooks.data.email, // list of receivers (who receives)
                    subject: hooks.data.emailSubject, // Subject line
                    text: hooks.data.emailInText, // plaintext body
                    html: hooks.data.emailInHTML // html body
                };

                // send mail with defined transport object
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        return console.log(error);
                    }

                    console.log('Message sent: ' + info.response);
                });

            }
        ],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};
