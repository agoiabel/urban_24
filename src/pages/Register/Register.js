import React from 'react';
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
        const color  = (!formState.isValid || !files.length) ? `#EAEAEA` : ``;
        let content = (
            <div className={styles.share}>
                <div className={styles.share_title}><span className={styles.share_icon}> <FiShare2 /> </span> <span>Share on</span></div>
                <a className={styles.share_fb} onClick={setLinkClicked} href="https://www.facebook.com/sharer/sharer.php?u=reno3urban24.ng/&description=please visit this site" target="_blank">
                    <FacebookSvg color={color} />
                </a>
                <a className={styles.share_tw} onClick={setLinkClicked} href="https://twitter.com/intent/tweet?url=reno3urban24.ng/&text=please visit this site>" target="_blank">
                    <TwitterSvg color={color} />
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
        <React.Fragment>
            <div  className={styles.register_content_header} >
                <h2>Submit Your Entry</h2>
                <div onClick={() => redirect()}>
                    <IoMdClose color="#000" size={30} />
                </div>
            </div>
            <form className={styles.register_content_form} onSubmit={handleSubmit(onSubmit)}>
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
                    <Input type={"number"} name="date_of_birth" control={control} placeholder="Age" errors={errors.date_of_birth} rules={{required: "age is a required"}} />
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

            </form>
        </React.Fragment>
    );

    if (page === 1) {
        screen = (
            <div className="text-center">
                <IoIosCheckmarkCircleOutline color="#099330" size={100} style={{ marginBottom: '1rem' }} />
                <h2>Your entry was submitted successfully</h2>
                <a className={styles.external_link} href={'https://www.oppo.com/ng/smartphone-reno3/'} target="_blank">
                    Learn more about Reno3 Series
                </a>
            </div>
        )
    }

    return (
        <LayoutDefault title={'Register'}>
            <div className={styles.register}>
                <div className={styles.register_hero}>
                    <div className={styles.register_hero_logo}>
                        <img src={require('../../images/urban24-logo.png')} alt="Urban24 logo" />
                    </div>
                    <div className={styles.register_hero_quote}>
                        <h4>Everyday is a fashion show and the
                            world is your runway.
                        </h4>
                        <p>- Coco Chanel</p>
                    </div>
                </div>

                <div className={styles.register_content}>
                    <div className={styles.register_content_wrapper}>
                        { screen }

                        <img className={styles.auth_screen_bg1} src={require('../../images/register_footer.svg')} alt="Urban24 sign up" />

                        <div className="text-center">
                            <Link to="/terms" className={styles.link_text}>
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}

export default Register;