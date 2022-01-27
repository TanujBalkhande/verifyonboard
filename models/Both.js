const mongoose = require('mongoose');

const BothSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    MiddleName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    aadhar: {
        type: Number,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    FullName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Both',BothSchema);