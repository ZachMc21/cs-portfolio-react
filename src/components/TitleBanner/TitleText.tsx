import React from 'react';

interface TitleTextProps {
    text: string;
}

const TitleText: React.FC<TitleTextProps> = ({ text }) => {
    return <h1>{text}</h1>;
};

export default TitleText;