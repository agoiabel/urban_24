import React from 'react';
import Nav from '../../components/Navbar';
import styles from './Landing.module.scss';
import arrow from '../../images/arrow.svg';
import AuthBg1 from '../../images/auth1.svg';
import Button from '../../components/Button';
import AuthBg2 from '../../images/auth2.svg';
import landingImg1 from '../../images/tk1.png';
import landingImg2 from '../../images/tk2.png';
import logo from '../../images/urban24-logo.png';
import LayoutDefault from '../../components/LayoutDefault';

const Landing = () => {
    return (
        <LayoutDefault>

            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <img src={require('../../images/urban24-logo.png')} alt="Urban24 logo" />
                    </div>
                </div>

                <div className={styles.banner_image}>
                    <img src={require('../../images/landing_banner_sm.png')} /> 
                </div>

                <div className={styles.banner_one_content}>
                    <div className={styles.wrapper}>
                        <div className={styles.banner_content_header}>
                            Star in Every Light
                        </div>
                        <p className={styles.banner_content_description}>
                            Urban 24 is a modeling search by leading smartphone brand OPPO, 
                            geared to discover the stars of tomorrow and launch the careers
                            of aspiring models dreaming of becoming one of the glamorous 
                            few to represent Nigeria to the world.
                        </p>
                    </div>
                </div>

                <div className={styles.banner_two_content}>
                    <div className={styles.wrapper}>
                        <div className={styles.banner_content_header}>
                            Participate to Win
                        </div>
                        <p className={styles.banner_content_description}>
                            Urban 24 is a modeling search by leading smartphone brand OPPO, 
                            geared to discover the stars of tomorrow and launch the careers
                            of aspiring models dreaming of becoming one of the glamorous 
                            few to represent Nigeria to the world.
                        </p>
                    </div>
                </div>

            </div>
        </LayoutDefault>
    )
}

export default Landing;

