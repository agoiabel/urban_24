import React from 'react';
import Button from '../Button';
import Header from '../Header';
import { motion } from "framer-motion";
import { IoMdArrowBack } from 'react-icons/io';
import styles from './WebThreeContent.module.scss';

const WebThreeContent = ({next}) => {

    return (
        <motion.div className={styles.container}>
            <Header />

            <div className={styles.content}>
                <motion.div initial={{ x: '20%'}} animate={{ x: 0 }} transition={{duration: 1, delay: 0.1}} className={styles.banner_image}>
                    <img src={require('../../images/reno_web_3.png')} />
                </motion.div>

                <div className={styles.banner_content}>
                    <div className={styles.banner_header}>
                        <motion.div initial={{ opacity: 0, y: '-20px'}} animate={{ opacity: 1, y: 0 }} transition={{duration: 1.2, delay: 0.3}} className={styles.banner_title}>Join the Contest</motion.div>
                    </div>

                    <div className={styles.items}>
                        <div className={styles.item_one_and_two}>
                            <motion.div initial={{ opacity: 0, y: '20px'}} animate={{ opacity: 1, y: 0 }} transition={{duration: 1.2, delay: 0.7}} className={styles.banner_item}>
                                <div className={styles.item}>
                                    <div className={styles.item_number}>1</div>
                                    <div className={styles.hr}></div>
                                </div>
                                <p className={styles.description}>
                                    Fill the registration form with all required information. 
                                    Upload your top 5 photos showing you star in different lightings.
                                </p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: '20%'}} animate={{ opacity: 1, x: 0 }} transition={{duration: 1.2, delay: 0.9}} className={`${styles.banner_item} ${styles.banner_item_two}`}>
                                <div className={styles.item}>
                                    <div className={styles.item_number}>2</div>
                                    <div className={styles.hr}></div>
                                </div>
                                <p className={styles.description}>
                                    Upon successful completion, 
                                    follow the prompt to share your participation 
                                    in the Urban24 contest on your social media.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div initial={{ opacity: 0, y: '20px'}} animate={{ opacity: 1, y: 0 }} transition={{duration: 1.2, delay: 1.2}} className={`${styles.banner_item} ${styles.banner_item_three}`}>
                            <div className={styles.item}>
                                <div className={styles.item_number}>3</div>
                                <div className={styles.hr}></div>
                            </div>
                            <p className={styles.description}>
                                All entries submitted will be analyzed by a team 
                                of judges and the finalists for the contest contacted.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: '20px'}} animate={{ opacity: 1, y: 0 }} transition={{duration: 1.2, delay: 1.5}} className={styles.web_button}>
                        <Button onClick={() => next(4)} type={'btn__primary__outline'} size={'btn__large'}>Enter Contest</Button>
                    </motion.div>

                    <motion.div initial={{ rotate: 180, scale: 1.5 }} animate={{ rotate: 0, scale: 1 }} transition={{duration: 1}} className={styles.back} onClick={() => next(2)}>
                        <div className={styles.item_number}><IoMdArrowBack /></div>
                    </motion.div>
                </div>
            </div>

            <img className={styles.auth_screen_bg1} src={require('../../images/footer_guest.svg')} alt="Urban24 sign up" />
        </motion.div>
    )
}

export default WebThreeContent;