import './ProductInOrderCard.css'
import {url} from '../../constants'


function ProductInOrderCard(props){
    return(
        <div className='card__product'>
            <img className='card__product--img'  src={`${url}${props.img}`}/>
            {props.amount > 1 &&
                <div className='amount__ball'>
                    <p>{ props.amount }</p>
                </div>
            }
        </div>
        
    )
}

export default ProductInOrderCard