const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes.js');
const subscriptionRoutes = require('./routes/subscriptionRoutes.js');
const monitoringRoutes = require('./routes/monitoringRoutes.js');
const paymentRoutes = require('./routes/paymentRoutes.js')
const billingRoutes = require('./routes/billingRoutes.js')




const app = express();

mongoose.connect('mongodb://localhost:27017/subscriptionService', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/userService/', userRoutes)
app.use('/subscriptionService/', subscriptionRoutes);
app.use('/billingService/', billingRoutes);
app.use('/paymentService/', paymentRoutes);
app.use('/monitoringService/', monitoringRoutes);



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
