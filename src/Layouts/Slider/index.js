import './Slider.scss';
import imageSilder from '@/assets/img/parallax-2.jpg';

function Slider() {
    return (
        <div className="slider" style={{ backgroundImage: `url(${imageSilder})` }}>
            <div className="slider__content">
                <h1 className="slider__content-title">
                    Search your next
                    <span className="slider__content-underline">Holiday</span>
                </h1>
                <h3 className="slider__content-sub-title">CHECK OUR BEST PROMOTION</h3>
                <div className="slider__content-wrap">
                    <input type="text" placeholder="Choose your Destination ..." className="slider__content-search" />
                    <i className="slider__content-icon ti-search"></i>
                    <div className="slider__content-history">
                        <h3 className="slider__content-history-title">Choose your Destination ...</h3>
                        <p className="slider__content-history-name">Europe</p>
                        <ol className="slider__content-history-list">
                            <li className="slider__content-history-item">Italy</li>
                            <li className="slider__content-history-item">Netherlands</li>
                        </ol>
                        <p className="slider__content-history-name">Asia</p>
                        <ol className="slider__content-history-list">
                            <li className="slider__content-history-item">Thailandia</li>
                        </ol>
                        <p className="slider__content-history-name">United States</p>
                        <p className="slider__content-history-name">Oceania</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
