import './Product.css'
import {url} from '../../constants'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { increment, openModal } from '../Article/articleSlice'
import { currentProduct } from '../Article/articleSlice'
import axios from 'axios'



function Product(props){
    const dispatch = useDispatch()
    
    function clickDelete(){
        dispatch(currentProduct(props))
        dispatch(openModal())
    }
    function addProduct(){
        dispatch(increment(props))

        axios.post(`${url}/orders/`,{
            product_ids: [18,17,16,15],
            user_email: "marc@gmail.com"
            
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        }) 
    }
    
    
    return(
        <div className='product'>
            <Link onClick={() => dispatch(currentProduct(props))} to='/card-product'>
                <img src={`${url}${props.img}`} alt='clothes' className='product__img'/>
            </Link>
            <div className='product__info'>
                <div className='product__info--wrap'>
                    <p className='product__name product__text'>{props.name}</p>
                    <p className='product__cost product__text'>{props.cost}</p>
                </div>
                <span>{props.amount}</span>
                <div className='button__wrap'>
                    <button onClick={addProduct} className='product__info--btn'>add to basket</button>
                    {props.showDeleteBtn && 
                    <span onClick={clickDelete}  className='button__wrap--delete'>delete</span> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Product