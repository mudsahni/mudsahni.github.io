import * as React from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react'
import './style.css'

interface BreadcrumbsProps {
    title: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ title }) => {
    return (
        <div className="breadcrumbs">
            <Breadcrumb>
                <Breadcrumb.Section><Link to="/">Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>{title}</Breadcrumb.Section>
            </Breadcrumb>
        </div>
    );
}