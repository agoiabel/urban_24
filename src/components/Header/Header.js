import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo_navs}>
                <Link className={styles.logo} to={'/'}>
                    <img src={require('../../images/logo.svg')} alt="Urban24 logo" />
                </Link>

                <div className={styles.navs}>
                    <div>
                        <Link to={'/terms'} className={`${styles.nav} ${styles.link}`}>Terms and Conditions</Link>
                    </div>
                    {/* <div className={`${styles.nav} ${styles.link}`}>
                        <Link to={'/terms'} className={`${styles.nav} ${styles.link}`}>About</Link>
                    </div> */}
                    <div className={`${styles.nav} ${styles.link}`}>
                        <a href={"http://www.oppo.com/ng"} target="_blank" className={`${styles.nav} ${styles.link}`}>OPPO.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;