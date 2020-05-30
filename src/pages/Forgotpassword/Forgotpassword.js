import React from 'react';
import {Link} from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import Input from '../../components/Input';
import Button from '../../components/Button';
import AuthLayout from '../../components/AuthLayout';
import { useDispatch, useSelector } from "react-redux";
import logo from '../../images/urban24-logo.png';
import authStyles from '../../components/AuthLayout/AuthLayout.module.scss';
import { ForgotpasswordCreate } from '../../shared/actions/Forgotpassword.action';

const Forgotpassword = props => {

    const dispatch = useDispatch();
    const [page, setPage] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);
	const {status, message} = useSelector(state => state.ForgotpasswordReducer);
    const { register, handleSubmit, formState, errors, setValue, control } = useForm({
        mode: "onChange",
    });
    
    const emailIcon = () => <MdEmail size={15} />;
    const onSubmit = async data => {
		setIsLoading(true);
		dispatch(ForgotpasswordCreate(data));
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

    let screen = (
        <React.Fragment>
            <h1 className={authStyles.auth_form_header}>Enter your account email and we’ll send your password to you.</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type={'email'} name="email" control={control} hasIcon icon={emailIcon} placeholder="Email" errors={errors.email} rules={{required: "email is a required",pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                }}} />

                <Button type={'btn__primary__solid'} size={'btn__large'} isLoading={isLoading} disabled={!formState.isValid}>Submit</Button>
            </form>
        </React.Fragment>
    );

    if (page === 1) {
        screen = (
            <React.Fragment>
                <h1 className={authStyles.auth_form_header}>Your password has been sent to personsemail@gmail.com</h1>
            </React.Fragment>
        );
    }

    return (
        <AuthLayout title={'Forgotpassword'}>
            <div className={authStyles.auth_screen_logo}>
                <img src={logo} alt="Urban24 logo" />
            </div>
            <div className={authStyles.auth_form}>
                <div className={authStyles.auth_form_box}>
                    { screen }
                    <div className={authStyles.auth_link}>
                        <Link to="/login" className="link-text">
                            Return to Login
                        </Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Forgotpassword;