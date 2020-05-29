import React from 'react';
import Button from '../Button';
import styles from './WebOneContent.module.scss';

const WebOneContent = props => {

    const popUp = () => {

    }

    return (
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
                            <Button onClick={() => popUp()} type={'btn__primary__outline'} size={'btn__large'}>Next</Button>
                        </div>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default WebOneContent;