import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './LargeAction.css';

interface Props {
  title: string;
  description: string;
  index: number;
  style?: React.CSSProperties;
  image: string;
  slug: string;
}

const LargeAction = ({ title, description, image, style, index, slug }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/${slug}`);

  return (
    <div onClick={handleClick} className="large-item-container" style={index === 2 ? { ...style, margin: 0 } : style}>
      <div className="large-image-container">
        {image !== '' && <img src={image} style={{ maxHeight: '100%' }} className="image"></img>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LargeAction;
