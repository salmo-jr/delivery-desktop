import React from 'react';
import styled from 'styled-components';

export const Card = styled.li`
    background-color: #ccc;
    border: thin solid #aaa;
    display: flex;
    padding: 10px;
    border-radius: 5px;

    & + & {
        margin-top: 15px;
    }
`;

export const Avatar = styled.img`
    width: 100px;
    border-radius: 50px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const Title = styled.h1`
    color: blue;
    margin: 0 0 5px 0;
`;

export const Info = styled.p`
    color: red;
    margin: 0;
    font-weight: bold;
`;

export const Link = styled.a`
    cursor: pointer;
`;