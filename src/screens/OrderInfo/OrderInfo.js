import Header from "../../components/Header/Header"
import ProductInOrderCard from "../../components/ProductInOrderCard/ProductInOrderCard"
import Footer from "../../components/Footer/Footer"
import { useParams } from 'react-router-dom';
import {url} from '../../constants'
import axios from 'axios'
import { useState, useEffect } from "react";


function OrderInfo(){
    const [product , setProducts] = useState([])
    const params = useParams();

    useEffect(() => {
        axios.get(`${url}/orders/${params.id}/`,{
            user_email: "marc4@gmail.com"
        })
        .then(res => {
            setProducts(res.data.products)
            console.log(product)
            
        })
        .catch(err => {
            console.log(err);
        })  
    }, [params.id])

    return (
        <div className='site'>
            <Header/>
            <main>
                {product.map((item,index)=> {
                    return <ProductInOrderCard  {...item} key={index}/>
                })}
            </main>
            <Footer/>
        </div>
    )
}
export default OrderInfo