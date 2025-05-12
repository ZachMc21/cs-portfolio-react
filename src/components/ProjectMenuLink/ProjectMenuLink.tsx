import React from 'react';
import { useState, useEffect } from 'react';
import './ProjectMenuLink.scss';

interface ProjectMenuLinkProps {
    text: string;
}

const ProjectMenuLink: React.FC<ProjectMenuLinkProps> = ({ text }) => {
    const [currentLink, setLink] = useState(0);

    useEffect(() => {
        // Effect code
        toggleProjectContent(text);

        //Display code
        return () => {
            <div className="projects-menu-link">
                <a onClick={handleClick()}> {text} </a>
            </div>
        };
      });

    function handleClick() {
        setLink(text);
    }

    function toggleProjectContent(text: string) {
        const allProjectContent = Array.from(document.getElementsByClassName('projects-menu-content') as HTMLCollectionOf<HTMLElement>);
        for(let i=0; i<allProjectContent.length; i++) {
            //Hide all project content
            allProjectContent[i].style.display="none";
            //Show current project content
            if(allProjectContent[i].id===text) {
                allProjectContent[i].style.display="block";
            }
        }        
    }

};

export default ProjectMenuLink;