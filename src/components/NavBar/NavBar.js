
import './styles.css';

const NavBar = () => {

    return (
        <div className='navbar-container'>
            <div>
            <a href="#">Logo</a>
            </div>
            <div>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    );
};

export default NavBar;