import React from 'react';

interface LinkProps {
    url: string;
    displayText: string;
}

const Link: React.FC<LinkProps> = ({ url, displayText }) => {
    return (
        <div className="link">
            <a href={url}>{displayText}</a>
        </div> 
    )
};

export default Link;