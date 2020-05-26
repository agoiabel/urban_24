import React from 'react';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';

const Nav = ({ logo, light, centered }) => {
    return (
        <React.Fragment>
            <div className={styles.navbar}>
                {logo && <div className={styles.navbar_logo}>
                    <img src={logo} alt="Urban24 logo" />
                </div>}
                <div className={` ${styles.navbar_links} ${centered && styles.centered}`}>
                    <Link to="/terms">
                        <a className={`link-text color-${light} ${styles.link}`}>Terms and Conditions</a>
                    </Link>
                    <Link to="/about">
                        <a className={`link-text color-${light} ${styles.link}`}>About</a>
                    </Link>
                    <Link to="/landing">
                        <a className={`link-text color-${light} ${styles.link}`}>OPPO.com</a>
                    </Link>
                </div>                    
            </div>
        </React.Fragment>
    )
}

export default Nav;