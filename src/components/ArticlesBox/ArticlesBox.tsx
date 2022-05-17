import * as React from 'react';
import './ArticlesBox.css';

type Props = {
  title: string;
  image: string;
  link: string;
};

const ArticlesBox = ({ title, image, link }: Props) => {
  return (
    <a href={link} className="article-box-container">
      <div className="article-image-container">
        <img src={image} className="article-image" />
      </div>
      <b style={{ flex: 2, marginLeft: 16, marginRight: 16, marginTop: 16 }}>{title}</b>
    </a>
  );
};

export default ArticlesBox;
