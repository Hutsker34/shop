import './Product.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { increment } from '../Article/articleSlice'

function Product(props){
    console.log(props)
    const dispatch = useDispatch()
    return(
        <Link to='/card-product'>
            <div className='product'>
                <img src={props.img} alt='clothes' className='product__img'/>
                <div className='product__info'>
                    <div className='product__info--wrap'>
                        <p className='product__name product__text'>{props.name}</p>
                        <p className='product__cost product__text'>{props.cost}</p>
                    </div>
                    <span>{props.amount}</span>
                    <button onClick={() => dispatch(increment(props))} className='product__info--btn'>add to basket</button>
                </div>
            </div>
        </Link>
        
    )
}

export default Product