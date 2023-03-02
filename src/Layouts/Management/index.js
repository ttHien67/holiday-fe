import './Management.scss'
import Button from '@/components/Button';

function Management({ children }) {
    return (
        <div className="manage-container">
            {/* Navbar trang quan ly */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Button to="/manage/packets" className="nav-link active" aria-current="page" >
                                    Packets
                                </Button>
                            </li>
                            <li className="nav-item">
                                <Button className="nav-link active" to="/manage/contacts">
                                    Contacts
                                </Button>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
}

export default Management;
