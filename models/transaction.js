const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    amount: Number,
    status: {
        type: String,
        enum: ['successful', 'failed', 'pending'],
        default: 'pending'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);
