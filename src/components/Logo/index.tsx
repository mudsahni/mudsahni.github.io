import * as React from 'react'
import './style.css'

interface LogoProps {

}

export const Logo: React.FC<LogoProps> = ({ children }) => {
    return (
        <div className="logo">
            {children}
        </div>
    );
}