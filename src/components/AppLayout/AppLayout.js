import React from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
import { Link } from  'react-router-dom';
import styles from './AppLayout.module.scss';
// import { logout } from '../../shared/auth_guard';
import AuthBg1 from '../../images/auth1.svg';
import AuthBg2 from '../../images/auth2.svg';
import logo from '../../images/urban24-logo.png';
import { FiLogOut, FiList } from 'react-icons/fi';

const AppLayout = ({title, children, pageStyle}) => {

    const logout = () => {

    }

    return (
        <div>
            <div>
                <meta charSet="utf-8" />
                <title>Urban24 - {title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" type="image/png" href="./images/favicon.ico" />
                <meta property="og:title"         content="Urban 24 contest" />
                <meta property="og:description"   content="Join to win" />
                <meta property="og:image"         content="http://www.your-domain.com/path/image.jpg" />
            </div>
            <div className={styles.app_screen}>
                <div className={styles.app_screen_sidebar}>
                    {/* <img className={styles.app_screen_bg1} src={AuthBg1} alt="Urban24 sign up" /> */}
                    <img className={styles.app_screen_bg2} src={AuthBg2} alt="Urban24 sign up" />
                    <img className={styles.app_screen_bg3} src={AuthBg1} alt="Urban24 sign up" />
                    <img className={styles.app_screen_bg4} src={AuthBg2} alt="Urban24 sign up" />
                    
                    {/* <img className={styles.auth_screen_bg1} src={require('../../public/images/auth_bg_abel.svg')} alt="Urban24 sign up" />
                    <img className={styles.auth_screen_bg2} src={AuthBg2} alt="Urban24 sign up" /> */}

                    <div className={styles.sidebar_content}>
                        <div className={styles.sidebar_content_logo}>
                            <img src={logo} alt="Urban24 logo" />
                        </div>
                        <div className={styles.sidebar_content_routes}>
                            <Link to="/dashboard">
                                <a className={styles.route}>
                                    <FiList color="#fff" size={20} style={{ marginRight: '1rem', transform: 'rotate(180deg)' }} />
                                    <p>Entries</p>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.sidebar_content_logout} onClick={() => logout()}>
                            <FiLogOut color="#fff" size={20} style={{ marginRight: '1rem', transform: 'rotate(180deg)' }} />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.app_screen_content} ${pageStyle}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppLayout;