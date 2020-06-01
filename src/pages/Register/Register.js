import React from 'react';
import { motion } from "framer-motion";
import states from '../../shared/states';
import { Link } from  'react-router-dom';
import { FiShare2 } from 'react-icons/fi';
import { useForm } from "react-hook-form";
import Input from '../../components/Input';
import styles from './Register.module.scss';
import toBase64 from '../../shared/tobase64';
import Button from '../../components/Button';
import Select from '../../components/Select';
import { useDispatch, useSelector } from "react-redux";
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import FileUploader from '../../components/FileUploader';
import useWindowDimensions from '../../shared/dimension';
import LayoutDefault from '../../components/LayoutDefault';
import TwitterSvg from '../../components/TwitterSvg/TwitterSvg';
import FacebookSvg from '../../components/FacebookSvg/FacebookSvg';
import { registerCreate } from '../../shared/actions/Register.action';
import { IoIosCheckmarkCircleOutline, IoMdClose } from 'react-icons/io';

const Register = props => {

    const dispatch = useDispatch();
    const [page, setPage] = React.useState(0);
    const [files, setFiles] = React.useState([]);
    const { height, width } = useWindowDimensions();
    const [isLoading, setIsLoading] = React.useState(false);
    const [linkClicked, setlinkClicked] = React.useState(false);
    const [formattedStates, setFormattedStates] = React.useState([]);
	const {status, message} = useSelector(state => state.RegisterReducer);
    const { register, handleSubmit, formState, errors, setValue, control } = useForm({
        mode: "onChange",
    });

    const genders = [
        { value: "MALE", label: "MALE " },
        { value: "FEMALE", label: "FEMALE" },
    ];
    const options = [
        { value: "chocolate", label: "Chocolate " },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
    ];
    
    const onSubmit = async data => {
        if (!files.length) return alert('You need to upload your files');
        data['images'] = await Promise.all(files.map(file => {
            return toBase64(file);
        }));
		setIsLoading(true);
		dispatch(registerCreate(data));
    };

	React.useEffect(() => {
        setIsLoading(false);
		if (status === 422) {
            return alert(message);
		}
		if (status === 200) {
            setPage(1);
        }
    }, [status, message]);

    const redirect = () => {
        if (width > 1200) {
            return props.next(3);
        }
        return props.history.push('/');
    }

    const setLinkClicked = () => {
        setlinkClicked(true);
    }

    React.useEffect(() => {
        let formattedStates = states.map(state => {
            let newState = {};
            newState['value'] = state;
            newState['label'] = state;
            return newState;
        });
        setFormattedStates(formattedStates);
    }, []);

    const button = () => {
        // const color  = (!formState.isValid || !files.length) ? `#EAEAEA` : ``;
        let content = (
            <div className={styles.share}>
                <div>
                    <div className={styles.share_title}>
                        <span className={styles.share_icon}> <FiShare2 /> </span> <span>Share on</span>
                    </div>
                    <div className={styles.share_sub}>You need to share before you can submit</div>
                </div>
                <a className={styles.share_fb} onClick={setLinkClicked} href="https://www.facebook.com/sharer/sharer.php?u=reno3urban24.ng/&description=I am participating in the OPPO Reno3 Urban24 Modelling Contest to win N2 million in cash, a brand new Reno3 smartphone and a front cover modelling deal on the biggest magazine in Nigeria. Visit https://www.reno3urban24.ng/ to join the contest too.  #OPPOReno3Series #Reno3Urban24" target="_blank">
                    <FacebookSvg />
                </a>
                <a className={styles.share_tw} onClick={setLinkClicked} href="https://twitter.com/intent/tweet?url=reno3urban24.ng/&text=I am participating in the OPPO Reno3 Urban24 Modelling Contest to win N2 million in cash, a brand new Reno3 smartphone and a front cover modelling deal on the biggest magazine in Nigeria. Visit https://www.reno3urban24.ng/ to join the contest too.  #OPPOReno3Series #Reno3Urban24>" target="_blank">
                    <TwitterSvg />
                </a>
            </div>
        )

        if (linkClicked) {
            content = (
                <div className={styles.register_formgroup}>
                    <Button type={'btn__primary__solid'} size={'btn__large'} isLoading={isLoading} disabled={!formState.isValid || !files.length}>Submit</Button>
                </div>
            )
        }

        return (
            <React.Fragment>
                { content }
            </React.Fragment>
        )
    }

    let screen = (
        <div className={styles.mobile_form}>
            <div  className={styles.register_content_header} >
                <motion.h2 initial={{ opacity: 0, x: '-70px'}} animate={{ opacity: 1, x: 0 }} transition={{duration: 1}}>Submit Your Entry</motion.h2>
                <motion.div initial={{ opacity: 0, x: '70px'}} animate={{ opacity: 1, x: 0 }} transition={{duration: 1}} whileHover={{ scale: 1.5, rotate: 360 }} onClick={() => redirect()}>
                    <IoMdClose color="#000" size={30} />
                </motion.div>
            </div>

            <motion.form initial={{ opacity: 0, y: '70px'}} animate={{ opacity: 1, y: 0 }} transition={{duration: 1, delay: 0.7}} className={styles.register_content_form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.register_formgroup}>
                    <Input type={'text'} name="firstname" control={control} placeholder="First Name" errors={errors.firstname} rules={{required: "firstname is a required", maxLength: {value: 30, message: "Max length is 30"}, minLength: {value: 3, message: "Min length is 3"}}} />
                </div>
                
                <div className={styles.register_formgroup}>
                    <Input type={'text'} name="lastname" control={control} placeholder="Last Name" errors={errors.lastname} rules={{required: "lastname is a required", maxLength: {value: 30, message: "Max length is 30"}, minLength: {value: 3, message: "Min length is 3"}}} />
                </div>

                <div className={styles.register_formgroup}>
                    <Input type={'email'} name="email" control={control} placeholder="Email Address" errors={errors.email} rules={{required: "email is a required",pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                    }}} />
                </div>

                <div className={styles.register_formgroup}>
                    <Input type={'number'} name="phonenumber" control={control} placeholder="Phone Number" errors={errors.phonenumber} rules={{required: "phonenumber is a required", maxLength: {value: 11, message: "Max length is 11"}, minLength: {value: 11, message: "Min length is 11"}}} />
                </div>

                <div className={styles.register_formgroup}>
                    <Input type={"text"} name="date_of_birth" control={control} placeholder="Age" errors={errors.date_of_birth} rules={{required: "age is a required", validate: {
                        positiveNumber: value => parseFloat(value) > 18,
                    }}} />
                </div>

                <div className={styles.register_formgroup}>
                    <Select name={"gender"} options={genders} control={control} placeholder="Gender" defaultValues={genders[0]} errors={errors.gender} rules={{ required: "gender is required" }} />
                </div>

                <div className={styles.register_formgroup}>
                    <Select name={"state"} options={formattedStates} control={control} placeholder="State Of Residency" defaultValues={formattedStates[0]} errors={errors.state} rules={{ required: "state is required" }} />
                </div>

                <div className={styles.register_formgroup} style={{ marginTop: '1rem' }}>
                    <Input type={'text'} name="address" control={control} placeholder="Address" errors={errors.address} rules={{required: "address is a required", maxLength: {value: 30, message: "Max length is 30"}}} />
                </div>

                <div className={styles.register_formgroup}>
                    <FileUploader setFiles={setFiles} />
                </div>

                { button() }

            </motion.form>
        </div>
    );

    if (page === 1) {
        screen = (
            <div className={styles.success_container}>
                <div className="text-center">
                    <IoIosCheckmarkCircleOutline color="#099330" size={100} style={{ marginBottom: '1rem' }} />
                    <h2>Your entry was submitted successfully</h2>
                    <a className={styles.external_link} href={'https://www.oppo.com/ng/smartphone-reno3/'} target="_blank">
                        Learn more about Reno3 Series
                    </a>
                </div>
            </div>
        )
    }

    return (
        <LayoutDefault title={'Register'}>
            <div className={styles.register}>
                <div className={styles.register_hero}>
                    <div className={styles.register_hero_logo}>
                        <img src={require('../../images/logo.svg')} alt="Urban24 logo" />
                    </div>
                    <motion.div initial={{ opacity: 0, y: '50px'}} animate={{ opacity: 1, y: 0 }} transition={{duration: 1}} className={styles.hero_message}>
                        <h3 className={styles.hero_message_quote}>Everyday is a fashion show and the world is your runway. </h3>
                        <p className={`${styles.hero_message_quote} ${styles.hero_name}`}>- Coco Chanel</p>
                    </motion.div>
                </div>

                <div className={styles.register_content}>
                    <div className={styles.register_content_wrapper}>
                        { screen }

                        <img className={styles.auth_screen_bg1} src={require('../../images/register_footer.svg')} alt="Urban24 sign up" />

                        <div className="text-center">
                            <Link to="/terms" className={styles.link_text}>Terms and Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}

export default Register;