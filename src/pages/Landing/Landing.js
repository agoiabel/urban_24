import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Navbar';
import styles from './Landing.module.scss';
import arrow from '../../images/arrow.svg';
import Header from '../../components/Header';
import AuthBg1 from '../../images/auth1.svg';
import Button from '../../components/Button';
import AuthBg2 from '../../images/auth2.svg';
import landingImg1 from '../../images/tk1.png';
import landingImg2 from '../../images/tk2.png';
import logo from '../../images/urban24-logo.png';
import useWindowDimensions from '../../shared/dimension';
import MobileContent from '../../components/MobileContent';
import LayoutDefault from '../../components/LayoutDefault';
import WebOneContent from '../../components/WebOneContent';
import WebTwoContent from '../../components/WebTwoContent';
import WebThreeContent from '../../components/WebThreeContent';

const Landing = () => {

    const [step, setStep] = React.useState(0);
    const { height, width } = useWindowDimensions();

    const popUp = () => {
        console.dir('popUp');
    }
    
    let container = (
        <MobileContent />
    )

    let content = (
        <React.Fragment>

            {/* <WebOneContent /> */}

            {/* <WebTwoContent /> */}

            <WebThreeContent />
            
        </React.Fragment>
    )

    if (width > 1200) {
        container = (
            <React.Fragment>
                <Header />

                { content }
            </React.Fragment>
        )
    }


    return (
        <LayoutDefault>

            <div className={styles.container}>
                { container }
            </div>

        </LayoutDefault>
    )
}

export default Landing;