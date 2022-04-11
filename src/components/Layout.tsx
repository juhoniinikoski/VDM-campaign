import * as React from 'react';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="main-container">
      <div>{children}</div>
      <div style={{ marginBottom: 100 }}></div>
    </div>
  );
};

export default Layout;
