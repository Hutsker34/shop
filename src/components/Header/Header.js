import { Link } from "react-router-dom";
import './Header.css'
import icon from '../../assets/basket.png'
import logo from '../../assets/logo.png'
import { useSelector} from 'react-redux'
import UserProfile from "../../screens/UserProfile/UserProfile";




function Header(){
    const count = useSelector((state) => state.article.value)
    

    return (
        <header className='header'>
            <div className='header__info '>
                <Link to="/">
                    <img className='header__logo' alt='logo' src={logo}/>
                </Link>
                <input className='header__input'/>
            </div>
            <div className='header__info'>
                <Link className="header__name--link" to="/userProfile">
                    <p className='header__name'>marc</p>
                </Link>
                <Link  className="basket__link" to="/basket">
                    <img className='header__basket' alt='basket' src={icon}/>
                    <span>{count}</span>
                </Link>
                
            </div>
        </header>
    )
}
export default Header