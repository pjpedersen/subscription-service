const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    features: [String] // er det nødvendigt for os??
});

module.exports = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);
