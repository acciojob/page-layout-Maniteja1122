import React from "react";

const PageLayout = ({ header, footer, children }) => {
  return (
    <>
      <div>{header}</div>      
      <div>{children}</div>    
      <div>{footer}</div>      
    </>
  );
};

export default PageLayout;
