import React from 'react';
import Header from '../Header';
import Button from '../Button';
import styles from './WebOneContent.module.scss';

const WebOneContent = ({next}) => {

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.banner_web_one}>
                <div className={styles.banner_web_image}>
                    <img src={require('../../images/reno_web.png')} />
                </div>
                <div className={styles.banner_web_one_content}>
                    <div className={styles.banner_web_header}>
                        <div className={styles.banner_title}>Star in</div>
                        <div className={`${styles.banner_title} ${styles.banner_sub_title}`}>Every Light</div>
                    </div>
                    <div>
                        <p className={`${styles.banner_content_description}`}>
                            Urban 24 is a modeling search by leading smartphone brand OPPO, 
                            geared to discover the stars of tomorrow and launch the careers 
                            of aspiring models dreaming of becoming one of the glamorous few 
                            to represent Nigeria to the world.
                            
                            <div className={styles.web_button}>
                                <Button onClick={() => next(2)} type={'btn__primary__outline'} size={'btn__large'}>Next</Button>
                            </div>
                        </p>
                    </div>
                </div>
            </div>

            <img className={styles.auth_screen_bg1} src={require('../../images/footer_guest.svg')} alt="Urban24 sign up" />
        </div>
    )
}

export default WebOneContent;