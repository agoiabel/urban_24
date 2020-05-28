import React from 'react';
import { Link } from 'react-router-dom';
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
    
    const popUp = () => {
        console.dir('popUp');
    }
    
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
                    <div className={styles.banner_two_content_description}>
                        <div className={styles.banner_two_content_header}>
                            Participate to Win
                        </div>
                        <p className={styles.banner_two_content_text}>
                            <div className={styles.banner_two_content_image}>
                                <img src={require('../../images/reno_mobile.png')} />
                            </div>

                            <div className={styles.items}>
                                <div className={styles.item}>
                                    <div className={styles.item_number}>1</div>
                                    <div className={styles.item_description}>One Million Naira (N1,000,000)</div>
                                </div>
                                <div className={`${styles.item} ${styles.item_two}`}>
                                    <div className={styles.item_number}>2</div>
                                    <div className={styles.item_description}>OPPO Reno3 Smartphone</div>
                                </div>
                                <div className={`${styles.item} ${styles.item_three}`}>
                                    <div className={styles.item_number}>3</div>
                                    <div className={styles.item_description}>An exclusive deal to Star the cover of Genevieve Magazine</div>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>

                <div className={styles.banner_three_content}>
                    <div className={styles.wrapper}>
                        <div className={styles.banner_content_header}>
                            How to Enter
                        </div>
                        <div className={styles.banner_three_items}>
                            <div className={styles.banner_three_item}>
                                <div className={styles.item}>
                                    <div className={styles.item_number}>1</div>
                                    <div className={styles.hr}></div>
                                </div>
                                <p className={styles.banner_content_description}>
                                    Fill the registration form with all required information. 
                                    Upload your top 5 photos showing you star in different lightings.
                                </p>
                            </div>

                            <div className={`${styles.banner_three_item} ${styles.banner_three_item__alternate}`}>
                                <div className={styles.item}>
                                    <div className={styles.item_number}>2</div>
                                    <div className={styles.hr}></div>
                                </div>
                                <p className={styles.banner_content_description}>
                                    Upon successful completion, 
                                    follow the prompt to share your participation 
                                    in the Urban24 contest on your social media.
                                </p>
                            </div>

                            <div className={styles.banner_three_item}>
                                <div className={styles.item}>
                                    <div className={styles.item_number}>3</div>
                                    <div className={styles.hr}></div>
                                </div>
                                <p className={styles.banner_content_description}>
                                    Fill the registration form with all required information. 
                                    Upload your top 5 photos showing you star in different lightings.
                                </p>
                            </div>
                        </div>

                        <Button onClick={() => popUp()} type={'btn__primary__outline'} size={'btn__large'}>Enter Contest</Button>
                    </div>
                </div>

                <div className={`${styles.footer} ${styles.wrapper}`}>
                    <div>
                        <Link to={'/terms'} className={styles.link}>Terms and Conditions</Link>
                    </div>
                    <div>
                        <Link to={'/about'} className={styles.link}>About</Link>
                    </div>
                    <div>
                        <Link to={'/'} className={styles.link}>OPPO.com</Link>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}

export default Landing;