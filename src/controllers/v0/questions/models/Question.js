const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: Date,
    updatedAt: Date,
});

module.exports = mongoose.model('question', questionSchema);
