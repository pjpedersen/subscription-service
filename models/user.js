const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ // Mongoose er et ODM (object document modelling) som bruges til at map js koden direkte til den tilknyttede mongoDB
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }, // Koden skal opbevares hashed, eventuelt i samarbejde med passport.js
    role: {type: String, enum:['content-creator', 'admin'], default: null}, // Rolle sættes som default til null, men har mulighed for at stå som content-creator / admin


});

const User = mongoose.model('User', userSchema);

module.exports = User;
