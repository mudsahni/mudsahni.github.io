import * as React from 'react'
import { Container } from 'semantic-ui-react';
import { PostPreview } from '../PostPreview';
import blog1 from '../../posts/theresSomeoneInMyHead'
import './style.css'

interface PostListProps {

}

export const PostList: React.FC<PostListProps> = ({ }) => {
    return (<div className="post-list">

        <Container>
            <div className="post-list-section">
                <div>
                    Posts
                </div>
                <div>
                    <PostPreview title={blog1.title} description={blog1.abstract} date={blog1.date}
                        readTime={blog1.readTime} type={blog1.type} link={blog1.link}></PostPreview>
                    <PostPreview title="Toxic Sentence Detector" description={
                        <p>After spending years with Tensorflow with Python, thought I'd check out TensorflowJS and build something simple.
                        Used a pre-trained model to detect the toxicity of a sentence.
                        </p>} date="Q1 2021"
                        readTime="External link" type="external" link="https://mudsahni.github.io/toxicSentenceDetector/"></PostPreview>

                    <PostPreview title="Sorting Visualizer" description={<p>A simple sorting visualizer built using TypeScript and ReactJS.
                        Relatively simple and fun way to upskill on front end technologies.</p>} date="Q2 2020"
                        readTime="External link" type="external" link="https://mudsahni.github.io//SortingVisualizer/"></PostPreview>

                    {/* <div className="placeholder-section">
                        <Placeholder>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder>
                    </div> */}
                </div>
            </div>
        </Container>
    </div>);
}