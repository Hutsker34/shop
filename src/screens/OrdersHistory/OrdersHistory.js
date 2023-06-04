import './OrdersHistory.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import PastOrdersCard from '../../components/PastOrdersCard/PastOrderscard'
import {url} from '../../constants'
import axios from 'axios'
import { useState , useEffect } from 'react';


function OrdersHistory(){
    let [orders, setOrders] = useState([])

    useEffect(()=>{
        axios.post(`${url}/orders/`,{
            user_email: "marc3@gmail.com"
    })
    .then(res => {
        setOrders(res.data)
    })
    .catch(err => {
        console.log(err);
    })  
    }, [])

    return(
        <div className='site'>
            <Header/>
            <main className="site__main">
                {orders.map((item,index)=> {
                        console.log('item',item)
                        return <PastOrdersCard  {...item} key={index}/>
                })}
            </main>
            <Footer/>
        </div>
    )
}

export default OrdersHistory