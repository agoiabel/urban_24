import React from 'react';
import arrow from '../../images/arrow.svg';
import AuthBg1 from '../../images/auth1.svg';
import AuthBg2 from '../../images/auth2.svg';
import Nav from '../../components/Navbar';
import styles from './Landing.module.scss';
import landingImg1 from '../../images/tk1.png';
import landingImg2 from '../../images/tk2.png';
import Button from '../../components/Button';
import logo from '../../images/urban24-logo.png';
import LayoutDefault from '../../components/LayoutDefault';

const Landing = () => {
    const theme = "white"
    return (
        <LayoutDefault title={'Landing Page'}>
            <div className={styles.landing}>
                <img className={styles.landing_bg1} src={AuthBg1} alt="Urban24 sign up" />
                <img className={styles.landing_bg2} src={AuthBg2} alt="Urban24 sign up" />
                <div className={styles.landing_content}>
                    <div style={{ padding: '0 3rem'}}>
                        <Nav logo={logo} light={theme} />
                    </div>
                    <div className={styles.landing_content_carousel}>
                        <div className={styles.hero}>
                            <img src={landingImg1} alt="Urban24 star thumbnail" />
                        </div>
                        <h4>
                            Star in <br />
                            <span style={{ paddingLeft: '30rem' }}>Every Light</span>
                        </h4>
                        <div className={styles.content_text}>
                            <p>We often talk about React components as lego building blocks to build our applications, and I think that when people hear this, they somehow think this excludes the state aspect. The "secret" behind my personal solution to the state management problem is to think of how your application's state maps to the application's tree structure.</p>
                            <div style={{ padding: '0 2rem'}}>
                                <Button type={'btn__transparent__light'} size={'btn__large'}>Enter Contest</Button>
                            </div>
                        </div>
                        <div className={styles.arrow}>
                            <img src={arrow} alt="Urban24 carousel icon" />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}

export default Landing;

