import * as React from 'react';
import './LargeAction.css';

interface Props {
  title: string;
  description: string;
  index: number;
  style?: React.CSSProperties;
}

const LargeAction = ({ title, description, style, index }: Props) => {
  return (
    <div className="large-item-container" style={index === 2 ? { ...style, margin: 0 } : style}>
      <div className="large-image-container"></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LargeAction;
