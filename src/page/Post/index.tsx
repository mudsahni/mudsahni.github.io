import * as React from 'react'
import { Container, Icon, Image } from 'semantic-ui-react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import './style.css'

interface PostProps {
    post: any;
}

export const Post: React.FC<PostProps> = (props: any) => {
    const post = require(`../../posts/${props.location.state.link}`)
    return (
        <div className="post">
            <Container className="top-padded-container">
                <Breadcrumbs title={post.default.title}></Breadcrumbs>

                <div className="post-container">
                    <div className="post-title">
                        {post.default.title}
                    </div>
                    <div className="post-metadata">
                        <span><Icon name="calendar outline"></Icon>{post.default.date}</span>
                        <span><Icon name="clock outline"></Icon>{post.default.readTime}</span>

                    </div>
                    <div className="post-image">
                        {post.default.image && <Image src={post.default.image} width={500}></Image>}
                    </div>
                    <div className="post-content">
                        {post.default.content}
                    </div>
                </div>
            </Container>
        </div>
    );
}