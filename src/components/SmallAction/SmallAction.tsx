import * as React from 'react';
import './SmallAction.css';

interface Props {
  title: string;
  description: string;
  style?: React.CSSProperties;
}

const SmallAction = ({ title, description, style }: Props) => {
  return (
    <div className="item-container" style={{ ...style }}>
      <div className="image-container"></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SmallAction;
