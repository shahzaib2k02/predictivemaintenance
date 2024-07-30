const axios = require('axios');

exports.predictFault = async (req, res) => {
    const { equipmentId, plantId, wkctrId, fromDate} = req.body;
    
    console.log('Received prediction request with data:', {
        equipmentId,
        plantId,
        wkctrId,
        fromDate
    });
    try {
        // Replace with your AI model endpoint URL
        const apiUrl = 'http://localhost:5001/predict'; // Adjust as per your actual AI model endpoint

        // Example: Sending data to AI model
        const response = await axios.post(apiUrl, {
            equipmentId,
            plantId,
            wkctrId,
            fromDate,
        });

        // Process AI model response as needed
        const { predictedDescription } = response.data;

        res.json({ predictedDescription });
    } catch (error) {
        console.error('Prediction error:', error);
        res.status(500).json({ error: 'Failed to predict fault. Please try again later.' });
    }
};
