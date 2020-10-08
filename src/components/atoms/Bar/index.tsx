import * as React from 'react'
import './style.css'

interface BarProps {
    height: number;
    value: number;
    margin: number;
    width: number;
    color: "primary-highlight" | "secondary-highlight" | "default";
}

export const Bar: React.FC<BarProps> = ({ value, height, width, margin, color }) => {
    const barStyle = {
        height: `${height}px`,
        marginRight: `${margin}vw`,
        // padding: `${margin}rem`,
        width: `${width}vw`,
        background: `var(--bar-color-${color})`
    }

    const barTextStyle = {
        paddingRight: `${margin}vw`
    }
    return (
        <div className="bar-container">
            <div className="bar" style={barStyle}>
            </div>
            <span className="bar-value" style={barTextStyle}>{value}</span>
        </div>

    );
}