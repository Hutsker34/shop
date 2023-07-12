import './ProductInOrderCard.css'
import {url} from '../../constants'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { currentProduct } from '../Article/articleSlice'

function ProductInOrderCard(props){
    const dispatch = useDispatch()
    
    return(
        <div className='card__product'>
            <Link onClick={() => dispatch(currentProduct(props))} to={`/card-product/${props.id}`}>
                <img className='card__product--img'  src={`${url}${props.img}`}/>
            </Link>
        </div>
        
    )
}

export default ProductInOrderCard