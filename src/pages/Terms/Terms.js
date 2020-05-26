import React from 'react';
import styles from './Terms.module.scss';
import Nav from '../../components/Navbar';
import {dummyTexts} from '../../shared/utils';
import LayoutDefault from '../../components/LayoutDefault';
import logo from '../../images/urban24-logo-black.png';

const Terms = props => {
    const renderContents = () =>
        dummyTexts.map(par => (
            <p key={par.order}>{par.text}</p>
        ));

    return (
        <LayoutDefault title={'Terms and Conditions'}>
            <div className={styles.terms}>
                <Nav logo={logo} />
                <div className={styles.terms_content}>
                    <h4>
                        Terms & <br />
                        Conditions
                    </h4>
                    { renderContents() }
                    <hr />
                    
                </div>
                <Nav centered />
            </div>
        </LayoutDefault>
    )
}

export default Terms;