const express = require('express');
const cors = require('cors');
const cors = require('path');

const customerRoutes = require('./routes/customerRoutes');
const billingRoutes = require('./routes/billingRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/wasco_water_billing_app.html'));
});

app.use(cors());
app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/admin', adminRoutes);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`WASCO backend running on port ${PORT}`);
});

