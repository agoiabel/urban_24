import React from 'react';
import Register from '../Register';

import styles from './Landing.module.scss';
import Header from '../../components/Header';
import Button from '../../components/Button';

import useWindowDimensions from '../../shared/dimension';
import MobileContent from '../../components/MobileContent';

import WebOneContent from '../../components/WebOneContent';
import WebTwoContent from '../../components/WebTwoContent';
import WebThreeContent from '../../components/WebThreeContent';

const TAB_CONTENT = {
    'Register': Register,
    'WebOneContent': WebOneContent,
    'WebTwoContent': WebTwoContent,
    'WebThreeContent': WebThreeContent,
};

const Landing = () => {

    const [step, setStep] = React.useState(0);
    const { height, width } = useWindowDimensions();
    const [ pages, setPages ] = React.useState([
        {
            id: 1,
            is_active: true,
            component: 'WebOneContent',
        },
        {
            id: 2,
            is_active: false,
            component: 'WebTwoContent',
        },
        {
            id: 3,
            is_active: false,
            component: 'WebThreeContent',
        },
        {
            id: 4,
            is_active: false,
            component: 'Register',
        },
    ]);

    const next = pageId => {
        let newPages = [...pages].map(page => {
            page['is_active'] = false;

            if (page.id === pageId) {
                page['is_active'] = true;
            }

            return page;
        });
        setPages(newPages);
    }

    let container = (
        <MobileContent next={next} />
    )

    if (width > 1200) { 
        const Component = TAB_CONTENT[pages.find(page => page.is_active).component];

        container = (
            <Component next={next} />
        )
    }

    return (
        <React.Fragment>
            { container }
        </React.Fragment>
    )
}

export default Landing;