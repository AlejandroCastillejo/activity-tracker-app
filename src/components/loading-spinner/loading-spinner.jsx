import React from "react";

import "./loading-spinner.scss";

const LoadingSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner-container" />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default LoadingSpinner;
