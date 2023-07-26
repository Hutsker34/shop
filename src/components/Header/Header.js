import { Link } from "react-router-dom";
import './Header.css'
import icon from '../../assets/basket.png'
import logo from '../../assets/logo.png'
import { useSelector  , useDispatch} from 'react-redux'
import { getSearchValue } from "./headerSlice";
import { useState} from "react";
import axios from "axios";
import { url } from "../../constants";


function Header(){
    const dispatch = useDispatch()
    const count = useSelector((state) => state.article.value)
    const [searchValue, setSearchValue] = useState('')
    


    

    
    function getInputValue(e){
        const result = e.target.value
        setSearchValue(result)
        dispatch(getSearchValue(result))
        
    }

    function sendSearchvalue(event){
        if (event.key === 'Enter') {
            axios.post(`${url}/products_search/`,{
                searchValue: searchValue,
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })  
        }   
        
    }
    


    return (
        <header className='header'>
            <div className='header__info '>
                <Link to="/">
                    <img className='header__logo' alt='logo' src={logo}/>
                </Link>
                <input onKeyDown={sendSearchvalue}  onChange={getInputValue} value={searchValue} className='header__input'/>
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