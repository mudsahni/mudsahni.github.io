import React from 'react'
import { Segment } from 'semantic-ui-react';

interface BackdropProps {
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
    const style = {
        justifyContent: "flex-end"
    }
    return (
        <Segment placeholder padded inverted color='blue' style={style}>
            {children}
        </Segment>
    );
}

export default Backdrop