import './PastOrdersCard.css'
import ProductInOrderCard from '../ProductInOrderCard/ProductInOrderCard'
import { Link } from 'react-router-dom'

function PastOrdersCard(props) {
    
    
    return(
            <Link  className='order__card' to={`/orderInfo/${props.id}`}>
                <span className='order__card--span'>заказ от 7 мая</span>
                <div className='order__catd--wrap'>
                    {props.products.map((item,index)=> {
                        return <ProductInOrderCard  {...item} key={index}/>
                    })}
                </div>
                <span className='order__card--span'>оплачено 40$</span>
            </Link>
    )
}

export default PastOrdersCard