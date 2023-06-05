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
    console.log('456',orderInfo)
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

    return (
        <div className='site'>
            <Header/>
            <main className="site_main">
                <span>заказ был оформлен {orderInfo.created_at}</span>
                {product.map((item,index)=> {
                    return <ProductInOrderCard  {...item} key={index}/>
                })}
                <span>полная стоимость {orderInfo.total_cost}$</span>
            </main>
            <Footer/>
        </div>
    )
}
export default OrderInfo