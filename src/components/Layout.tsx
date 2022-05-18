import * as React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

interface Props {
  children: JSX.Element;
  showButton: boolean;
}

const Layout = ({ children, showButton }: Props) => {
  return (
    <div>
      {showButton && (
        <div className="back-button">
          <BsArrowLeftShort size={20} />
          <a href="/VDM-campaign">Takaisin</a>
        </div>
      )}
      <div className="main-container">
        {children}
        <div style={{ height: 70, width: '100%', textAlign: 'center' }}>
          <p>©2022 #sinunpuolestasirokotettu</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
