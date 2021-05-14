import React from 'react';
import { shell } from 'electron'
import { Title, Info, Link, Card, Description, Avatar } from './styles';

const PersonCard = ({ data }) => {
    return (
        <Card bgcolor={styleCard ? 'dark' : 'light'}>
            <Avatar onMouseOver={() => setStyleCard()} src={data.avatar_url} />
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