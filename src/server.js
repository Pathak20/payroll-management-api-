const express = require('express');
const payrollRoutes = require('./routes/payrollRoutes');

const app = express();
app.use(express.json());
app.use('/api/payroll', payrollRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Payroll API running on port ${PORT}`));
