import * as React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FunctionComponent = ({ children }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div>{children}</div>;
};

export default ScrollToTop;
