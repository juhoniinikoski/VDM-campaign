import * as React from 'react';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="main-container">
      <div>{children}</div>
      <div style={{ height: 70, width: '100%', textAlign: 'center' }}>
        <p>©2022 #sinunkinpuolestasirokotettu</p>
      </div>
    </div>
  );
};

export default Layout;
