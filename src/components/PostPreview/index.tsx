import * as React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

interface PostPreviewProps {
    title: string;
    description: JSX.Element;
    date: string;
    readTime: string;
    type: string;
    link: string;
}

export const PostPreview: React.FC<PostPreviewProps> = ({ title, description, date, type, link, readTime }) => {

    const getPreviewBox = () => {
        return (
            <div className="post-preview-content">
                <div className="post-preview-title">
                    {title}
                </div>
                <div className="post-preview-description">
                    {description}
                </div>
                <div className="post-preview-tags">
                    <div>
                        <span>
                            {date}
                        </span>
                        <span> {readTime}</span></div>
                </div>

            </div>

        )
    }
    return (
        <div className="post-preview-container">
            {type === "external" ? <a href={link} target="_blank">
                {getPreviewBox()}
            </a> :
                <Link to={{ pathname: `/${link}`, state: { link: link } }}>
                    {getPreviewBox()}

                    {/* <Divider /> */}
                </Link>
            }
        </div>
    );
}