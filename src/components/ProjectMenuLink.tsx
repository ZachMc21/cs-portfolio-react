import React from 'react';
import { useState } from 'react';

interface ProjectMenuLinkProps {
    text: string;
}

const ProjectMenuLink: React.FC<ProjectMenuLinkProps> = ({ text }) => {
    const [currentLink, setLink] = useState(0);

    function handleClick() {
        setLink(text);
    }

    return (
        <div className="project-menu-link">
            <a onClick={handleClick()}> {text} </a>
        </div> 
    )
};

export default ProjectMenuLink;