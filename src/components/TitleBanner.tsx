import React from 'react';
import TitleText from './TitleBanner/TitleText';
import Email from './TitleBanner/Email';
import ComponentWrapper from './ComponentWrapper';

interface TitleBannerProps {
  title: string;
  email?: string;
  ListOfLinks?: React.ReactNode;
}

const TitleBanner: React.FC<TitleBannerProps> = ({ title, email, ListOfLinks }) => {
  return (
    <div className="title-banner">
      <TitleText text={title} />
      {email && <Email text={email} />}
      {ListOfLinks && <ComponentWrapper>{ListOfLinks}</ComponentWrapper>}
    </div>
  );
};

export default TitleBanner;