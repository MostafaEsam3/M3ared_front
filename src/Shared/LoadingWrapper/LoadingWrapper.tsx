// src/components/LoadingWrapper.tsx

import React from 'react';
import Loading from '../../Shared/LoaderUi/LoaderUi'; // Adjust the import path as necessary

type LoadingWrapperProps = {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  children: React.ReactNode;
};

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  isLoading,
  isError,
  errorMessage = 'Something went wrong',
  children,
}) => {
  if (isLoading) {
    return <Loading isLoading={isLoading} message="Loading..." />;
  }

  if (isError) {
    return <div>{errorMessage}</div>;
  }

  return <>{children}</>;
};

export default LoadingWrapper;
