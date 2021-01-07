import * as React from 'react'
import './style.css'
interface ContainerProps {

}

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
}