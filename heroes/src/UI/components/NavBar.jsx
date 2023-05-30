import { useContext } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Auth';


export const Navbar = () => {

    const navigate = useNavigate()
    const { Logout } = useContext( AuthContext )

    const onNavigate = () => {
        Logout()
        navigate("/login",{
            replace: true 
        })  
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark p-3 mb-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroeApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active': ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active': ''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active': ''}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            {/* Cambiado el replace del historial */}

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex flex-end">
                
                <ul className="navbar-nav ml-auto">
                    <button
                        className="nav-item nav-link btn" 
                        onClick={ onNavigate }
                        >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}