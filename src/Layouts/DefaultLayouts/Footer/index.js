import Image from '@/components/Image';
import logoFooter from '@/assets/img/logo-footer.png';
import imageFooter from '@/assets/img/footer-img.jpg';

import './Footer.scss';
function Footer() {
    return (
        <footer className="footer-section" style={{ backgroundImage: `url(${imageFooter})` }}>
            <div className="content-section">
                <div className="footer__margin-8"></div>
                <div className="footer__contact">
                    <div className="footer__contact-info">
                        <div className="footer__contact-sub-title">KEEP IN TOUCH</div>
                        <h1 className="footer__contact-title">Travel with Us</h1>
                        <div className="clear"></div>
                    </div>
                    <div className="footer__contact-input">
                        <input type="text" className="footer__contact-input-btn" />
                        <button className="footer__contact-input-send">SEND</button>
                    </div>
                </div>
                <div className="footer__margin-8"></div>

                <div className="footer__content">
                    <div className="footer__introduce">
                        <div className="footer__introduce-content">
                            <Image src={logoFooter} alt="logo footer" className="footer__introduce-logo" />
                            <p className="footer__introduce-paragragh">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam et nibh{' '}
                                <ins>condimentum</ins> venenatis eu ac magnasin. Quisque interdum est mauris, eget
                                ullamcorper
                            </p>
                            <div className="footer__introduce-link">
                                <a href="" className="ti-twitter-alt"></a>
                                <a href="" className="ti-youtube"></a>
                                <a href="" className="ti-facebook"></a>
                                <a href="" className="ti-vimeo-alt"></a>
                            </div>
                        </div>
                        <div className="footer__introduce-list">
                            <div className="col-3 footer__introduce-item">
                                <h1 className="footer__introduce-item-title">OUR AGENCY</h1>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    Services
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    Insurancee
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    Agency
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    Tourism
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    Payment
                                </p>
                            </div>
                            <div className="col-3 footer__introduce-item">
                                <h1 className="footer__introduce-item-title">PARTNERS</h1>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    Booking
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    RentalCar
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    HostelWorld
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    Trivago
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    TripAdvisor
                                </p>
                            </div>
                            <div className="col-3 footer__introduce-item">
                                <h1 className="footer__introduce-item-title">LAST MINUTE</h1>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    London
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    California
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    Indonesia
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    Europe
                                </p>
                                <p className="footer__introduce-item-p">
                                    <i className="footer__introduce-item-p-icon ti-angle-right"></i>
                                    Oceania
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__end">
                        <p className="footer__end-title">THE BEST WORDPRESS TRAVEL THEME</p>
                        <p className="footer__end-title">COPYRIGHT NICDARK THEMES 2018</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
