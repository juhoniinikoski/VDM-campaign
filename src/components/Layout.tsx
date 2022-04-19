import * as React from 'react';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="main-container">
      <div>{children}</div>
      <div style={{ marginTop: 64, height: 70, width: '100%', textAlign: 'center' }}>
        <p>©2022 #sinunkinpuolestasirokotettu</p>
      </div>
    </div>
  );
};

export default Layout;
