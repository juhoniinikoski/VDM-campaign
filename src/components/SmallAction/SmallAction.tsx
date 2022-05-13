import * as React from 'react';
import './SmallAction.css';

interface Props {
  title: string;
  description: string;
  style?: React.CSSProperties;
  index: number
}

const SmallAction = ({ title, description, style, index }: Props) => {
  return (
    <div className="item-container" style={{ ...style, marginLeft: index === 1 ? 16 : 0, marginRight: index === 0 ? 16 : 0 }}>
      <div className="image-container"></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SmallAction;
