import * as React from 'react'
import { Container, Icon, Image } from 'semantic-ui-react';
import './style.css'
import TRex from '../../tyrannosaurus-rex-dinosaur-silhouette.svg'
interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({ }) => {
    return (
        <div className="footer-container">
            <Container>
                <div className="footer">
                    <div className="footer-info">
                        <div className="name">
                            <Image src={TRex} width={50} /><span>mudit sahni</span>
                        </div>
                        <div>
                            <Icon name="copyright outline" size="small"></Icon>
                            2021 | UI design inpsired from <a href="www.substack.com">Substack</a>, built by me. Yes, that's a t-rex.</div>

                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/mudsahni" target="_blank"><Icon name="github square" size="big" link={true}></Icon></a>

                        <a href="https://www.linkedin.com/in/mudit-sahni/" target="_blank"><Icon name="linkedin square" size="big" link={true}></Icon></a>

                    </div>
                </div>
            </Container>
        </div>
    );
}