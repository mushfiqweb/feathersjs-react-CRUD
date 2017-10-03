'use strict';

// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.


module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const mailer = new mongooseClient.Schema({
        email: { type: String, required: false },
        emailSubject: { type: String, required: false },
        emailInText: { type: String, required: false },
        emailInHTML: { type: String, required: false },

        /* SCHEMA_DEFAULT */

        createdBy: { type: String, 'default': 'App' },
        updatedBy: { type: String, 'default': 'App' },
        createdAt: { type: Date, 'default': Date.now },
        updatedAt: { type: Date, 'default': Date.now },
        isDeleted: { type: String, 'default': 'false' }
    });

    return mongooseClient.model('mailer', mailer);
};
