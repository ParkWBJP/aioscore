import React, { useEffect } from 'react';
import './LoadingPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/result', {
        state: location.state
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <div className="loading-texts">
        <p>AIO 점수를 분석중입니다...</p>
        <p>AIOスコアを分析中です...</p>
        <p>Analyzing your AIO score...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
