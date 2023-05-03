
import { Link, useLocation } from 'react-router-dom';
import "./Header.css";
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    console.log(user)

    const location = useLocation();
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src="https://images.vexels.com/media/users/3/224164/isolated/preview/841be8b857448d1e2d59637111a8b4fa-chef-hat-clothing-logo.png" alt="" className='logo' /> Chef's Universe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav p-2 mx-auto mb-2 mb-lg-0">
                            <li className={`nav-item me-3 ${location.pathname === '/' ? 'active' : ''}`}>
                                <Link to='/' className="nav-link myColor">Home</Link>
                            </li>
                            <li className={`nav-item me-3 ${location.pathname === '/blog' ? 'active' : ''}`}>
                                <Link to='/blog' className="nav-link myColor">Blog</Link>
                            </li>
                            <li className={`nav-item me-3 ${location.pathname === '/about' ? 'active' : ''}`}>
                                <Link to='/about' className="nav-link myColor">About Us</Link>
                            </li>
                        </ul>
                        <div>
                            {user ? user.photoURL ?
                                <img src={user.photoURL} alt="" className='photoURL me-3' />
                                : <FaUserCircle className='me-3 photoURL'></FaUserCircle> : null}
                        </div>
                        {user ?
                            <Link to=""><button onClick={handleLogOut} className="btn btn-outline-primary" type="submit">Log Out</button></Link> :
                            <Link to="/login"><button className="btn btn-outline-primary" type="submit">Login</button></Link>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;