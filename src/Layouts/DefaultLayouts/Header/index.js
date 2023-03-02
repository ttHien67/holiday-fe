import './Header.scss';
import Image from '@/components/Image';
import logoHeader from '@/assets/img/logo-travel.png';
import Button from '@/components/Button';
import Navigation from '@/components/Navigation'

import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

function Header() {
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
                        <label htmlFor="open--close" className="nav__icon">
                            <FontAwesomeIcon icon={faBars} />
                        </label>
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
