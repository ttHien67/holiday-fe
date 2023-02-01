import './Slider.scss';
import imageSilder from '@/assets/img/parallax-2.jpg';
import Search from '@/components/Search'

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
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default Slider;
