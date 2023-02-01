import './Destination.scss';

function Destination({ data }) {
    return (
        <div className="col-3 des__item">
            <img src={require(`src/assets` + data.img)} alt="" className="des__item-img" />
            <div className="des__item-content">
                <div className="des__item-content-img">
                    <img src={require(`src/assets` + data.logo)} alt="" />
                </div>
                <div className="des__item-content-text">
                    <h1 className="des__item-title">{data.title}</h1>
                    <p className="des__item-text">{data.text}</p>
                </div>
            </div>
            <div className="des__item--hover">
                <h1 className="des__item--hover-title">Packets</h1>
                <div className="des__item--hover-list">
                    {data.packages.map((packet, index) => {
                        return (
                            <a href="" className="des__item--hover-item" key={index}>
                                {packet}
                            </a>
                        );
                    })}
                </div>
                <div className="des__item--hover-btn">
                    <a href="" className="des__item--hover-btn-link">
                        VIEW DESTINATION
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Destination;
