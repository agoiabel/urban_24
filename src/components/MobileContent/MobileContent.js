import React from 'react';
import Header from '../Header';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styles from './MobileContent.module.scss';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BannerOne = props => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref} animate={controls} initial="hidden" variants={{visible: { opacity: 1, y: 0, x: 0 }, hidden: { opacity: 0, y: 300, x: 300 }}} transition={{duration: 2}}>
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
        </motion.div>
    )
}

const BannerTwo = props => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref} animate={controls} initial="hidden" variants={{visible: { opacity: 1, y: 0, x: 0 }, hidden: { opacity: 0, y: 300, x: 300 }}} transition={{duration: 2, delay: 0.5}} className={styles.banner_two_content}>
            <div className={styles.banner_three_content_image}>
                <img src={require('../../images/mobile_phone.png')} /> 
            </div>
            <div className={styles.wrapper}>
                <div className={styles.banner_two_content_header}>
                    Participate to Win
                </div>
                <p className={styles.banner_content_description}>
                    Two Finalists will each win N1,000,000 in cash, 
                    a brand new Reno 3 Smartphone, media coverage on 
                    top news and lifestyle platforms in Nigeria,  
                    and an exclusive deal to Star the cover of Genevieve Magazine.
                </p>
            </div>
        </motion.div>
    )
}

const BannerThree = ({gotoNext}) => {    
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <motion.div ref={ref} animate={controls} initial="hidden" variants={{visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 300 }}} transition={{duration: 2, delay: 1}} className={styles.banner_three_content}>
            <div className={styles.banner_three_content_image}>
                <img src={require('../../images/reno_web_3.png')} /> 
            </div>
            <div className={styles.wrapper}>
                <div className={styles.banner_content_header}>
                    Join the Contest
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

                <Button onClick={gotoNext} type={'btn__primary__outline'} size={'btn__large'}>Enter Contest</Button>
            </div>
        </motion.div>
    )
}

const Footer = props => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref} animate={controls} initial="hidden" variants={{visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: -300 }}} transition={{duration: 1}} className={`${styles.footer} ${styles.wrapper}`}>
            <div>
                <Link to={'/terms'} className={styles.link}>Terms and Conditions</Link>
            </div>
            <div>
                <Link to={'/about'} className={styles.link}>About</Link>
            </div>
            <div>
                <Link to={'/'} className={styles.link}>OPPO.com</Link>
            </div>
        </motion.div>
    )
}

const MobileContent = props => {
    
    const gotoNext = () => {
        return alert('Registration closed');
        props.history.push('/register');
    }

    return (
        <div className={styles.container}>
            <Header />

            <BannerOne />

            <BannerTwo />

            <BannerThree gotoNext={gotoNext} />

            <Footer />
        </div>
    )
}

export default withRouter(MobileContent);