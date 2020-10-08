import React from 'react'
import { Icon } from 'semantic-ui-react'
import './style.css'

interface LegendProps {
    color?: "red" | "orange" | "yellow" | "olive" |
    "green" | "teal" | "blue" |
    "violet" | "purple" | "pink" |
    "brown" | "grey" | "black" | "white";
}

export const Legend: React.FC<LegendProps> = ({ color = "white", children }) => {
    return (

        <div className="legend-icon">
            {   color === 'white' ? <Icon name="square full"></Icon> :
                <Icon name="square full" color={color}></Icon>
            }
            {children}
        </div>
    );
}