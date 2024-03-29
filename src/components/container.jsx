import React from 'react';

const Container = ({ children, className = '' }) => {
  const combinedClasses = `container mx-auto px-4 py-4 md:px-8 lg:px-16 ${className}`;

  return <div className={combinedClasses}>{children}</div>;
};

export default Container;
