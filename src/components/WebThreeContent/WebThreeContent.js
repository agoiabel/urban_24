import React from 'react';
import Button from '../Button';
import Header from '../Header';
import { IoMdArrowBack } from 'react-icons/io';
import styles from './WebThreeContent.module.scss';

const WebThreeContent = ({next}) => {

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.banner_web_three}>
                <div className={styles.banner_web_image}>
                    <img src={require('../../images/reno_web_3.png')} />
                </div>
                <div className={styles.banner_web_one_content}>
                    <div className={styles.banner_web_header}>
                        <div className={styles.banner_title}>How to Enter</div>
                    </div>
                    <div>
                        <div className={styles.items}>
                            
                            <div className={styles.banner_three_item}>
                                <div className={styles.item}>
                                    <div className={styles.item_number}>1</div>
                                    <div className={styles.hr}></div>
                                </div>
                                <p className={styles.banner_web_three_description}>
                                    Fill the registration form with all required information. 
                                    Upload your top 5 photos showing you star in different lightings.
                                </p>
                            </div>

                            <div className={`${styles.banner_three_item} ${styles.banner_three_item_two}`}>
                                <div className={styles.item}>
                                    <div className={styles.item_number}>2</div>
                                    <div className={styles.hr}></div>
                                </div>
                                <p className={styles.banner_web_three_description}>
                                    Upon successful completion, 
                                    follow the prompt to share your participation 
                                    in the Urban24 contest on your social media.
                                </p>
                            </div>

                            <div className={`${styles.banner_three_item} ${styles.banner_three_item_three}`}>
                                <div className={styles.item}>
                                    <div className={styles.item_number}>3</div>
                                    <div className={styles.hr}></div>
                                </div>
                                <p className={styles.banner_web_three_description}>
                                    All entries submitted will be analyzed by a team 
                                    of judges and the finalists for the contest contacted.
                                </p>
                            </div>

                            <div className={styles.web_three_button}>
                                <Button onClick={() => next(4)} type={'btn__primary__outline'} size={'btn__large'}>Enter Contest</Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.back} onClick={() => next(2)}>
                        <div className={styles.item_number}><IoMdArrowBack /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebThreeContent;