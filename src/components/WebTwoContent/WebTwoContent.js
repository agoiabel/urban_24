import React from 'react';
import Button from '../Button';
import Header from '../Header';
import { motion } from "framer-motion";
import { IoMdArrowBack } from 'react-icons/io';
import styles from './WebTwoContent.module.scss';

const WebTwoContent = ({next}) => {

    return (
        <motion.div className={styles.container}>
            <Header />

            <div className={styles.banner_web_two}>
                <motion.div initial={{ x: '30%'}} animate={{ x: 0 }} transition={{duration: 1, delay: 0.1}} className={styles.banner_web_image}>
                    <img src={require('../../images/reno_web_2.png')} />
                </motion.div>
                
                <div>
                    <div className={styles.banner_web_header}>
                        <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{duration: 1.5, delay: 0.2}} className={styles.banner_title}>Participate <br /><span className={styles.sub_title}>to Win</span></motion.div>
                    </div>
                    <div className={styles.banner_web_description}>
                        <motion.p initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{duration: 1.5, delay: 0.3}} className={styles.item}>
                            Two Finalists will each win N1,000,000 in cash, a brand new Reno 3 Smartphone, 
                            media coverage on top news and lifestyle platforms in Nigeria,  
                            and an exclusive deal to Star the cover of Genevieve Magazine.
                        </motion.p>
                    </div>
                </div>

                <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{duration: 1.5, delay: 0.6}} className={styles.web_button}>
                    <Button onClick={() => next(3)} type={'btn__primary__outline'} size={'btn__large'}>Next</Button>
                </motion.div>

                <motion.div initial={{ rotate: 180, scale: 1.5 }} animate={{ rotate: 0, scale: 1 }} transition={{duration: 1}} className={styles.back} onClick={() => next(1)}>
                    <div className={styles.item_number}><IoMdArrowBack /></div>
                </motion.div>
            </div>

            <img className={styles.auth_screen_bg1} src={require('../../images/footer_guest.svg')} alt="Urban24 sign up" />
        </motion.div>
    )
}

export default WebTwoContent;