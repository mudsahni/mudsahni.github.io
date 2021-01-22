import * as React from 'react'
import { Link } from 'react-router-dom';
import { Container, Image } from 'semantic-ui-react';
import './style.css'
import TRex from '../../iguanodon-dinosaur-shape.svg'
interface NavProps {

}

export const Nav: React.FC<NavProps> = ({ }) => {
    return (
        <div className="nav-bar">
            <Container className="top-padded-container">
                <div className="nav-logo"><Image src={TRex} width={50} /><span><Link to="/">mudit sahni</Link></span></div>
            </Container>
        </div>
    );
}