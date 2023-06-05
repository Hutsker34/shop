import './PastOrdersCard.css'
import ProductInOrderCard from '../ProductInOrderCard/ProductInOrderCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { currentOrders } from '../../components/Article/articleSlice'

function PastOrdersCard(props) {
    
    const date = new Date(props.created_at);
    
    const dispatch = useDispatch()
    
    
    dispatch(currentOrders())


    function getOrderInfo(){
        dispatch(currentOrders(props))
        
    }
    
    return(
            <Link onClick={getOrderInfo} className='order__card' to={`/orderInfo/${props.id}`}>
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