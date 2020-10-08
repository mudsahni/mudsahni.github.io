import React from 'react'
import './style.css'

interface LegendBarProps {

}

export const LegendBar: React.FC<LegendBarProps> = ({ children }) => {
    return (

        <div className="legend-bar">
            {children}
        </div>
    );
}