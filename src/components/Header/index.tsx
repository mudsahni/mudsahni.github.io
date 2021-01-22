import * as React from 'react'
import { Button, Container } from 'semantic-ui-react';
import './style.css'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <div className="header-container">
            <Container className="top-padded-container">
                <div className="header-content">
                    <div>
                        Hello.
                    </div>
                    <div>
                        <p>
                            My name is <span className="bold-blue-text">Mudit</span>.
                            I created my own website so I can have a place where I can <em>think through writing</em> and consequently keep a record
                            of my thoughts. I also wanted to have an incentive to build user-facing products
                            which I can showcase here, even if I’m the only one looking!
                        </p>
                        <p>
                            Couldn't I just write and build products without having a website? I could, but I believe that the best way to think is to <span className="bold-text">think out loud</span>. The best way to think out loud
                            is to <span className="bold-text">write</span>. The best way to learn is to <span className="bold-text">do</span>. And the best way
                            to <span className="bold-text">hold yourself accountable</span> to think and to learn is to <span className="bold-text">pursue them publicly</span>.
                            This website is out there in the world. Probably no one besides me is ever going to see it. But if someone does, then I do need to have something here, don’t I!?                        </p>

                    </div>
                    <Button color="pink" disabled>Contact</Button>
                </div>
            </Container>
        </div>
    );
}