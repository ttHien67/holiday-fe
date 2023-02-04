import { Link } from 'react-router-dom';
import './SearchItem.scss';

function SearchItem({ data }) {
    return (
        <Link to={`/packet/`+ data._id} className="wrapper-item">
            <img className="img" src={require(`src/assets` + data.img)} alt={data.title}/>
            <div className="info">
                <h4 className="title">{data.title}</h4>
                <span className="location">{data.location}</span>
            </div>
        </Link>
    );
}

export default SearchItem;
