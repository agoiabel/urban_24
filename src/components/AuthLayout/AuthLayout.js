import React from 'react';
// import Head from 'next/head';
import styles from './AuthLayout.module.scss';
import AuthBg1 from '../../images/auth1.svg';
import AuthBg2 from '../../images/auth2.svg';

const AuthLayout = ({title, children}) => {
    return (
        <div>
            <div className={styles.auth_screen}>
                <img className={styles.auth_screen_bg1} src={require('../../images/auth_bg_abel.svg')} alt="Urban24 sign up" />
                <img className={styles.auth_screen_bg2} src={AuthBg2} alt="Urban24 sign up" />
                <div className={styles.auth_screen_content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;