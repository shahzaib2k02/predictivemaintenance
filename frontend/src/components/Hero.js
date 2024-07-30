// Home.js
import React from 'react';
import Layout from '../components/Layout';
import backgroundImage from '../Assets/images/parco-bg.jpg';
import PredictionForm from '../components/predictionForm';
import '../Assets/styles/hero.css';

const Home = () => {
  return (
    <Layout>
      <div className='hero'>
        <div className='hero-background' style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className='hero-overlay'>
            <PredictionForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
