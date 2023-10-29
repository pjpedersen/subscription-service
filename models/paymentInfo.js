const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    creditCardNumber: { // Tænker vi kun skal opbevare de sidste 4 cifre hvis muligt??
        type: String,
        required: true
    },
    expirationDate: String, // Bør vi opbevare dette? Det skal i hvert fald hashes
    cvv: String, // Bør vi opbevare dette? Det skal i hvert fald hashes
    transaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }
});

module.exports = mongoose.model('PaymentInfo', paymentSchema);
