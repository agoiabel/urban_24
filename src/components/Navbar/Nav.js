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
                    <Link to="/terms" className={`link-text color-${light} ${styles.link}`}>
                        Terms and Conditions
                    </Link>
                    <a to="/about" className={`link-text color-${light} ${styles.link}`} href={"https://www.oppo.com/en/"} target="_blank">
                        About
                    </a>
                    <a className={`link-text color-${light} ${styles.link}`} href={"https://www.oppo.com/en/"} target="_blank">
                        oppo.com
                    </a>
                </div>                    
            </div>
        </React.Fragment>
    )
}

export default Nav;