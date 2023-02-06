import './Header.scss';
import Image from '@/components/Image';
import logoHeader from '@/assets/img/logo-travel.png';
import Button from '@/components/Button';

import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

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
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <label htmlFor="open--close" className="nav__icon">
                            <FontAwesomeIcon icon={faBars} />
                        </label>
                    </div>
                </div>
            </header>

            <input type="checkbox" name="" className="open--close" id="open--close" hidden />
            <label htmlFor="open--close" className="overlay"></label>
            <div className="navigation">
                <div className="navigation__container">
                    <label htmlFor="open--close" className="btn-close ti-close"></label>
                    <div className="navigation__packages">
                        <h1 className="nav__packages-title">
                            <u>OPTION</u>
                        </h1>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
