import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './SmallAction.css';

interface Props {
  title: string;
  description: string;
  style?: React.CSSProperties;
  index: number;
  slug: string;
}

const SmallAction = ({ title, description, style, index, slug }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/${slug}`);

  return (
    <div
      onClick={handleClick}
      className="item-container"
      style={{ ...style, marginLeft: index === 1 ? 16 : 0, marginRight: index === 0 ? 16 : 0 }}
    >
      <div className="image-container"></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SmallAction;
