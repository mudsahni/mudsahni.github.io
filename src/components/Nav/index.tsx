import * as React from 'react'
import { Container } from '../Container';
import { Logo } from '../Logo';
import './style.css'

interface NavProps {
    text: string;
}

export const Nav: React.FC<NavProps> = ({ text }) => {
    return (
        <Container>
            <Logo>{text}</Logo>
        </Container>
    );
}