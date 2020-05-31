import React from 'react';
import styles from './Terms.module.scss';
import Nav from '../../components/Navbar';
import {dummyTexts} from '../../shared/utils';
import Header from '../../components/Header';
import logo from '../../images/urban24-logo-black.png';

const Terms = props => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.nav}>
                    <Header />
                </div>

                <div className={styles.header_content}>
                    <div className={styles.wrapper}>
                        Terms & <br />
                        Conditions
                    </div>
                </div>

                <img className={styles.auth_screen_bg1} src={require('../../images/term_header_bg.svg')} alt="Urban24 sign up" />
            </div>

            <div className={styles.items}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>Guide for Participants</div>

                    <div className={styles.item}>
                        <div className={styles.item_header}>Eligibility Guidelines</div>
                        <ul>
                            <li> - You must be a resident in Nigeria.</li>
                            <li> - You must submit 5 pictures.</li>
                            <li> - You must be over 18 or have the written permission of your legal guardian.</li>
                        </ul>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.item_header}>Submission Guidelines</div>
                        <ul>
                            <li>The deadline for portfolio entry is 8th of June, 2020</li>
                        </ul>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.item_header}>Selection Guidelines</div>
                        <ul>
                            <li>The selected entries would be sent an email on or before the June 15, 2020.</li>
                        </ul>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.item_header}>Disqualification Guidelines</div>
                        <ul>
                            <li> - Any unoriginal submission shall be disqualified.</li>
                            <li> - Any submission that infringes on the rights of another person 
                                (including but not limited to copyrights, trademark rights, right to privacy, right
                                of publicity or other IP or civil rights) shall be disqualified.
                            </li>
                            <li> - Any submission that features pornography, nudity or violence, or is otherwise inappropriate or provocative shall be disqualified.</li>
                            <li> - Any submission that in any way denigrates the OPPO brand shall be disqualified.</li>
                            <li> - Submissions can be disqualified based on the discretion of OPPO and the judges of this competition.</li>
                        </ul>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.item_header}>Legal Guidelines</div>
                        <ul>
                            <li> - You must have the capacity to enter into a legally binding agreement.</li>
                            <li> - You must not be bound by any existing contract that forbids your participation in this competition.</li>
                            <li> - You must not enter into any agreement with any other smartphone OEM during the duration of this competition.</li>
                            <li> - All models and images in all submissions must be royalty-free and can be used by OPPO on any media & non-media platform without restrictions.</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Terms;