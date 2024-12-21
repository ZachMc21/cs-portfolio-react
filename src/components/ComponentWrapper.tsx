import React from 'react';


interface CustomElementWrapperProps {
    children: React.ReactNode;
}

const CustomElementWrapper: React.FC<CustomElementWrapperProps> = ({ children }) => {
    return <div className="component-wrapper">{children}</div>;
};

export default CustomElementWrapper;