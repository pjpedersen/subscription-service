const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: Date,
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubscriptionPlan'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
