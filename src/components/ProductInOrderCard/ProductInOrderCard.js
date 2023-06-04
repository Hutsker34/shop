import './ProductInOrderCard.css'
import {url} from '../../constants'


function ProductInOrderCard(props){
    return(
        <div className='card__product'>
            <img className='card__product--img'  src={`${url}${props.img}`}/>
        </div>
        
    )
}

export default ProductInOrderCard