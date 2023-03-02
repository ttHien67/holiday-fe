import './Navigation.scss'

function Navigation() {
    return (
        <>
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
        </>
    );
}

export default Navigation;
