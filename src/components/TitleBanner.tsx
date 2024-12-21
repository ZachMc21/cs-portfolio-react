import React from 'react';
import './TitleBanner.scss';

interface TitleBannerProps {
  title: string;
}

const TitleBanner: React.FC<TitleBannerProps> = ({ title }) => {
  return (
    <div className="title-banner">
      <h1>{title}</h1>
    </div>
  );
};

export default TitleBanner;