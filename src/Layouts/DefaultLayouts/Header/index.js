import './Header.scss';
import Image from '@/components/Image';
import logoHeader from '@/assets/img/logo-travel.png';
import Button from '@/components/Button';
import Navigation from '@/components/Navigation';
import AccountServices from '@/services/AccountServices';
import anonymousAvatar from '@/assets/img/anonymous-avatar.png';
import PopperWrapper from '@/components/Wrapper';

import { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronCircleUp, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import jwtDecode from 'jwt-decode';
import TippyHeadless from '@tippyjs/react/headless';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [user, setUser] = useState();
    const [open, setOpen] = useState(false);

    const navigate = useNavigate()

    const getUserByToken = () => {
        let token = localStorage.getItem('token');

        if (!token) {
            return;
        }
        token = jwtDecode(token);

        return token;
    };

    useEffect(() => {
        const tokenUser = getUserByToken();

        if(tokenUser) {
            const fetchApi = async () => {
                const user = await AccountServices.get(tokenUser?.userId);
    
                if (user) {
                    setUser(user);
                }
            };
            tokenUser?.userId && fetchApi();
        }

    }, []);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser()
        navigate(('/'))
    }

    return (
        <Fragment>
            <header className="header">
                <div className="header-nav">
                    <div className="nav">
                        <div className="nav__logo">
                            <Image src={logoHeader} alt="logo" />
                        </div>
                        <div className="nav__option">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <Button to="/">Home</Button>
                                </li>
                                <li className="nav__item hover-package">
                                    <Button to="/packets">Packets</Button>
                                </li>
                                <li className="nav__item nav__item-shop ">
                                    <a href="">Shop</a>
                                </li>
                                <li className="nav__item nav__item-shop">
                                    <a href="">About Us</a>
                                </li>
                                <li className="nav__item nav__item-pages">
                                    <a href="">Pages</a>
                                </li>
                                <li className="nav__item nav__item-news">
                                    <a href="">News</a>
                                </li>
                                <li className="nav__item nav__item-contact">
                                    <Button to={'/contact'}>Contact</Button>
                                </li>
                            </ul>
                        </div>

                        {user ? (
                            <TippyHeadless
                                interactive
                                placement="bottom"
                                visible={open}
                                render={(attrs) => (
                                    <div className="nav__wrapper-user" tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <ul className='nav__wrapper-list'>
                                                <li className='nav__wrapper-item'>
                                                    <FontAwesomeIcon icon={faUser}/> 
                                                    <span className='nav__wrapper-item-name'>Profile</span>
                                                </li>
                                                <li className='nav__wrapper-item' onClick={handleLogout}>
                                                    <FontAwesomeIcon icon={faArrowRightFromBracket}/> 
                                                    <span className='nav__wrapper-item-name'>Log out</span>
                                                </li>
                                            </ul>
                                        </PopperWrapper>
                                    </div>
                                )}
                                onClickOutside={handleToggle}
                            >
                                <label className="nav__icon" onClick={handleToggle}>
                                    <img src={anonymousAvatar} alt="avatar" className="nav__avatar-image" />
                                    <span className="nav__avatar-username">{user.username}</span>
                                </label>
                            </TippyHeadless>
                        ) : (
                            <label htmlFor="open--close" className="nav__icon">
                                <Button className='nav__btn-login' to='/login'>Log in</Button>
                            </label>
                        )}
                    </div>
                </div>
            </header>

            <Navigation />

            <div className="header-mini">
                <a href="#" className="header-mini__up-btn">
                    <FontAwesomeIcon icon={faChevronCircleUp} />
                </a>
            </div>
        </Fragment>
    );
}

export default Header;
