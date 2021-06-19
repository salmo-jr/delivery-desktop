import React, { useState } from 'react';
import { shell } from 'electron'
import { Title, Info, Link, Card, Description, Avatar } from './styles';

const PersonCard = ({ data }) => {
    const [bgColor, setBgColor] = useState('dark');

    return (
        <Card bgColor={bgColor}
            onMouseOver={() => setBgColor('light')}
            onMouseLeave={() => setBgColor('dark')}
        >
            <Avatar src={data.avatar_url} />
            <Description>
                <Title>{data.login} <span>{data.id}</span></Title>
                <Info>
                    <Link onClick={(event) => {
                        event.preventDefault();
                        shell.openExternal(data.html_url);
                    }}>
                        git page
                    </Link>
                </Info>
            </Description>
        </Card>
    );
}

export default PersonCard;
