import React from 'react';

interface LinkProps {
    path: string
    alt?: string
}

const TitleText: React.FC<LinkProps> = ({ path, alt }) => {
    return (
        <img className="linkicon" src={path} alt={alt} />
    )
};

export default TitleText;