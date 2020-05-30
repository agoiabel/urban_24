import React from 'react';
import Button from '../Button';
import { IoMdArrowBack } from 'react-icons/io';
import styles from './WebTwoContent.module.scss';
import Header from '../Header';

const WebTwoContent = ({next}) => {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.banner_web_two}>
                <div className={styles.banner_web_image}>
                    <img src={require('../../images/reno_web_2.png')} />
                </div>
                
                <div className={styles.banner_web_one_content}>
                    <div className={styles.banner_web_header}>
                        <div className={styles.banner_title}>Participate to Win</div>
                    </div>
                    <div>
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

                            <div className={styles.web_button}>
                                <Button onClick={() => next(3)} type={'btn__primary__outline'} size={'btn__large'}>Next</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.back} onClick={() => next(1)}>
                    <div className={styles.item_number}><IoMdArrowBack /></div>
                </div>
            </div>

            <img className={styles.auth_screen_bg1} src={require('../../images/footer_guest.svg')} alt="Urban24 sign up" />
        </div>
    )
}

export default WebTwoContent;