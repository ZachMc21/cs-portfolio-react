import React from 'react';
import LinkIcon from './LinkIcon';

interface EmailProps {
    url: string;
    displayText: string;
    iconPath?: string;
}

const TitleText: React.FC<EmailProps> = ({ url, displayText, iconPath }) => {
    return (
        <div className="link">
            <a href={url}>{displayText} </a>;
            {iconPath && <LinkIcon path={[iconPath, displayText]} />}
        </div> 
    )
};

export default TitleText;