import * as React from 'react'
import { Container } from '../../components/Container';
import { Divider } from '../../components/Divider';
import { Nav } from '../../components/Nav';
import { Post } from '../../components/Post';
import './style.css'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({ }) => {
    return (
        <React.Fragment>
            <Nav text="mudit sahni" />
            <Divider />
            <Post />
        </React.Fragment>
    );

}