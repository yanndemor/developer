import React from 'react';

import './loadingspinner.scss';

const LoadingSpinner = () => (
  <div className="loader">
    <div className="loader-inner">
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
    </div>
  </div>

);

export default LoadingSpinner;
