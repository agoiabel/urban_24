import React from 'react';
// import Link from 'next/link';
import {Link} from 'react-router-dom';
// import { useRouter } from 'next/router';
import styles from './User.module.scss';
import Nav from '../../components/Navbar';
import Lightbox from 'react-image-lightbox';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import { FiArrowLeft } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import AppLayout from '../../components/AppLayout';
import { useDispatch, useSelector } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { userGet } from '../../shared/actions/User.action';

import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineDownload } from "react-icons/ai";

const UserShow = props => {

    // const router = useRouter();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState(false);
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const {user, status, message} = useSelector(state => state.UserReducer);

    React.useEffect(() => {
        if (user === null) {
            // dispatch( userGet(router.query.id) );
        }
    }, []);
    
    let container = (
        <div className={styles.user_box}>
            <Loader />
        </div>
    );

    if (status === 422) {
        container = (
            <div className={styles.user_box}>
                <div className={styles.error}>
                    <IoIosCloseCircleOutline color="#ec5252" size={75} />
                    <h4>
                        { message }
                    </h4>
                </div>
            </div>
        )
    }

    if ((user !== null) && (status === 200)) {

        const images = user.images.map(image => image);

        container = (
            <React.Fragment>
                <div className={styles.user_grid}>
                    <div className={styles.user_profile}>
                        <h4 className={styles.user_fullname}>
                            {user.firstname} <br />
                            {user.lastname}
                        </h4>
                        <div className={styles.user_info_group}>
                            <pre className={styles.user_info}>
                                <AiOutlineUser size={15} />
                                <p>{ user.gender }</p>
                            </pre>
                            <pre className={styles.user_info}>
                                <AiOutlineMail size={15} />
                                <p>{ user.email }</p>
                            </pre>
                            <pre className={styles.user_info}>
                                <AiOutlinePhone size={15} />
                                <p>{ user.phonenumber }</p>
                            </pre>
                            <pre className={styles.user_info}>
                                <FaBirthdayCake size={15} />
                                <p>{ user.date_of_birth }</p>
                            </pre>
                            <pre className={styles.user_info}>
                                <MdLocationOn size={15} />
                                <p>{ user.address }</p>
                            </pre>
                        </div>
                    </div>

                    <div className={styles.user_photos}>
                        <h4>
                            Photos
                        </h4>
                        <div className={styles.user_photos_thumbnails}>
                            {user.images.map((image, i) => (
                                <div className={styles.thumbnail} key={i}>
                                    <img src={image} />
                                    <a className={styles.download_icon} href={image} download target="_blank"> 
                                        <AiOutlineDownload color="#FFF" size={18} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.user_add_button}>
                        <Button type={'btn__transparent__dark'} size={'btn__large'}>{user.is_selected ? 'Remove From Finalists' : 'Add To Finalists'}</Button>
                    </div>
                    <div className={styles.user_download_button}>
                        <Button type={'btn__primary__solid'} size={'btn__large'} onClick={() => setIsOpen(true)}>Open Images</Button>
                    </div>
                </div>
                <Nav centered />
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        onCloseRequest={() => setIsOpen(false)}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    />
                )}
            </React.Fragment>
        )
    }
    
	return (
		<AppLayout pageStyle={styles.user}>
            <div className={styles.navigate}>
                <Link to="/dashboard" as="/dashboard">
                    <FiArrowLeft size={30} />
                </Link>
            </div>
            {container}
		</AppLayout>
	)
}

// UserShow.getInitialProps = async props => {
//     const { query, store } = props.ctx;
//     const id = query.id;

//     store.dispatch( userGet(id) );
    
//     return {id};
// }

export default UserShow;