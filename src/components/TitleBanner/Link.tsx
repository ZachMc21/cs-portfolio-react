import React from 'react';

interface LinkProps {
    url: string;
    displayText: string;
}

const Link: React.FC<LinkProps> = ({ url, displayText }) => {
    return (
        <div className="profile-link">
            <a href={url} target="_blank">{displayText}</a>
        </div> 
    )
};

export default Link;