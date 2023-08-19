import Header from "../../components/Header/Header"
import ProductInOrderCard from "../../components/ProductInOrderCard/ProductInOrderCard"
import Footer from "../../components/Footer/Footer"
import './OrderInfo.css'
import { useParams } from 'react-router-dom';
import {url} from '../../constants'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'


function OrderInfo(){
    const [product , setProducts] = useState([])
    const params = useParams();
    const orderInfo = useSelector((state) => state.article.orders)


    useEffect(() => {
        axios.get(`${url}/order/${params.id}/`,{
            user_email: "marc4@gmail.com"
        })
        .then(res => {
            setProducts(res.data.products)
            
        })
        .catch(err => {
            console.log(err);
        })  
    }, [params.id])



    if(!orderInfo.created_at){
        return null
    }
    const date = new Date(orderInfo.created_at);
    const options = {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    };

const formatter = new Intl.DateTimeFormat("default", options);
const formattedDateTime = formatter.format(date);
    
   

    

    return (
        <div className='site'>
            <Header/>
            <main className="site_main">
                <span className="main__time">заказ был оформлен: {formattedDateTime}</span>
                <div className="main__products">
                    {product.map((item,index)=> {
                        return <ProductInOrderCard  {...item} key={index}/>
                    })}
                </div>
                <span className="main__total-cost">полная стоимость заказа: {orderInfo.total_cost}$</span>
            </main>
            <Footer/>
        </div>
    )
}
export default OrderInfo