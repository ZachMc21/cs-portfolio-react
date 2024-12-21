import React from 'react';

interface EmailProps {
    email: string;
}

const TitleText: React.FC<EmailProps> = ({ email }) => {
    return <a href={`mailto:${email}`}>{email}</a>;
};

export default TitleText;