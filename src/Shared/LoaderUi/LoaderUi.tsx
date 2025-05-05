import React from 'react';

type LoadingProps = {
  isLoading: boolean;
  message?: string;
};

const Loading: React.FC<LoadingProps> = ({ isLoading, message = 'Loading...' }) => {
  if (!isLoading) return null;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">{message}</span>
      </div>
    </div>
  );
};

export default Loading;
