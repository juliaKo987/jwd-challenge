import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.PNG';
import LogoutBtn from '../components/Buttons/LogoutBtn';

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">
                    <img id="Logo" src={Logo} alt='Hoval Logo' />
                </Link> 
            </div>
            <LogoutBtn />
        </header>
    );
}

export default Header;