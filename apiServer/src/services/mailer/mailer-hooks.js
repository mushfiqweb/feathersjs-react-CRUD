
'use strict';
const sgMail = require('@sendgrid/mail');
const mailSettings = require('./mail-settings');


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

                sgMail.setApiKey(mailSettings.apiKey);
                console.log(hooks.data);
                const msg = {
                    to: hooks.data.email,
                    from: 'hello@mushfiqurs.com',
                    subject: hooks.data.emailSubject,
                    text: hooks.data.emailInText,
                    html: hooks.data.emailInHTML,
                };
                sgMail.send(msg);
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
