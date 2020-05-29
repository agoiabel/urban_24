import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo_navs}>
                <div className={styles.logo}>
                    <img src={require('../../images/urban24-logo.png')} alt="Urban24 logo" />
                </div>

                <div className={styles.navs}>
                    <div>
                        <Link to={'/terms'} className={`${styles.nav} ${styles.link}`}>Terms and Conditions</Link>
                    </div>
                    <div className={`${styles.nav} ${styles.link}`}>
                        <Link to={'/terms'} className={`${styles.nav} ${styles.link}`}>About</Link>
                    </div>
                    <div className={`${styles.nav} ${styles.link}`}>
                        <Link to={'/terms'} className={`${styles.nav} ${styles.link}`}>OPPO.com</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;