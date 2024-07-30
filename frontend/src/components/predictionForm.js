import React, { useState } from 'react';
import axios from 'axios';
import Popup from './Popup'; // Import the Popup component
import '../Assets/styles/predictionForm.css';

const PredictionForm = () => {
    const [equipmentId, setEquipmentId] = useState('');
    const [plantId, setPlantId] = useState('');
    const [wkctrId, setWkctrId] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [predictedDescription, setPredictedDescription] = useState('');
    const [error, setError] = useState('');
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!equipmentId.trim()) {
            setError('Equipment ID is required.');
            return;
        }
        console.log('Form submitted with data:', {
            equipmentId,
            plantId,
            wkctrId,
            fromDate
        });

        try {
            const response = await axios.post('http://localhost:3001/api/predict/fault', {
                equipmentId,
                plantId,
                wkctrId,
                fromDate
            });

            const { predictedDescription } = response.data;
            setPredictedDescription(predictedDescription);
            setPopupVisible(true); // Show the popup
        } catch (error) {
            setError('Failed to predict fault. Please try again later.');
            console.error('Prediction error:', error);
        }
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className="prediction-form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type='text'
                        id='equipmentId'
                        placeholder="Equipment ID"
                        value={equipmentId}
                        onChange={(e) => setEquipmentId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type='text'
                        id='plantId'
                        placeholder="Planning Plant ID"
                        value={plantId}
                        onChange={(e) => setPlantId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type='text'
                        id='wkctrId'
                        placeholder="Work Center ID"
                        value={wkctrId}
                        onChange={(e) => setWkctrId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        id="fromDate"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        id="toDate"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                </div>
                <button type="submit">Predict Fault</button>
            </form>

            {error && <p className='error'>{error}</p>}
            {isPopupVisible && (
                <Popup message={predictedDescription} onClose={closePopup} />
            )}
        </div>
    );
};

export default PredictionForm;
