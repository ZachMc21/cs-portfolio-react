import React from 'react';
import LinkIcon from './LinkIcon';

interface LinkProps {
    path: string;
    alt?: string
}

const TitleText: React.FC<LinkProps> = ({ path, alt }) => {
    return (
        <img src={path} alt={alt} />
    )
};

export default TitleText;