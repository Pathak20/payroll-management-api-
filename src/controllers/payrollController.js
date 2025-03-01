const axios = require('axios');

exports.processPayroll = async (req, res) => {
    try {
        await axios.post('http://airflow-server:8080/api/v1/dags/payroll_dag/dagRuns');
        res.json({ message: 'Payroll process started in Airflow' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to trigger Airflow' });
    }
};
