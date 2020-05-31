import React from 'react';
import Header from '../Header';
import Button from '../Button';
import styles from './WebOneContent.module.scss';
import { motion, AnimatePresence } from "framer-motion";

const WebOneContent = ({next}) => {

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.banner_web_one}>
                <motion.div className={styles.banner_web_image} initial={{ x: '20%'}} animate={{ x: 0 }} transition={{duration: 1}}>
                    <img  src={require('../../images/reno_web.png')} />
                </motion.div>

                <div className={styles.banner_web_one_content}>
                    <div className={styles.banner_web_header}>
                        <motion.div initial={{ opacity: 0, y: '-20px'}} animate={{ opacity: 1, y: 0 }} transition={{duration: 3, delay: 0.1}} className={styles.banner_title}>Star in</motion.div>
                        <motion.div initial={{ opacity: 0, y: '30px'}} animate={{ opacity: 1, y: 0 }} transition={{duration: 3, delay: 0.7}} className={`${styles.banner_title} ${styles.banner_sub_title}`}>Every Light</motion.div>
                    </div>

                    <motion.p initial={{ x: '100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration: 1, delay: 1}} className={`${styles.banner_content_description}`}>
                        Urban24 is a search for young and trendy Nigerian models 
                        that aspire to become celebrities and superstars through Fashion, 
                        Art and Photography. Urban 24 is geared to discover the stars of 
                        tomorrow and launch the careers of aspiring models from Nigeria to the world.
                        <div className={styles.web_button}>
                            <Button onClick={() => next(2)} type={'btn__primary__outline'} size={'btn__large'}>Next</Button>
                        </div>
                    </motion.p>
                </div>
            </div>

            <img className={styles.auth_screen_bg1} src={require('../../images/footer_guest.svg')} alt="Urban24 sign up" />
        </div>
    )
}

export default WebOneContent;