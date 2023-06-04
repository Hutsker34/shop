import './PastOrdersCard.css'
import ProductInOrderCard from '../ProductInOrderCard/ProductInOrderCard'
import { Link } from 'react-router-dom'

function PastOrdersCard(props) {
    console.log('props',props)
    const date = new Date(props.created_at);
    
    
    return(
            <Link  className='order__card' to={`/orderInfo/${props.id}`}>
                <span className='order__card--span'>заказ от {new Intl.DateTimeFormat(['ban', 'id']).format(date)}</span>
                <div className='order__catd--wrap'>
                    {props.products.map((item,index)=> {
                        
                        return <ProductInOrderCard  {...item} key={index}/>
                    })}
                </div>
                <span className='order__card--span'>оплачено {props.total_cost}$</span>
            </Link>
    )
}

export default PastOrdersCard