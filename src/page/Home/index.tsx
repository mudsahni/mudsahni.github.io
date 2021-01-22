import * as React from 'react'
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PostList } from '../../components/PostList';
import './style.css'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({ }) => {
    return (
        <React.Fragment>
            <Header />
            <PostList />
            {/* <Post title={theresSomeoneInMyHead.title} date={theresSomeoneInMyHead.date}>{theresSomeoneInMyHead.content}</Post> */}
        </React.Fragment>
    );

}