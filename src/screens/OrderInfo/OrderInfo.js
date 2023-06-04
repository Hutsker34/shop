import Header from "../../components/Header/Header"
import ProductInOrderCard from "../../components/ProductInOrderCard/ProductInOrderCard"
import Footer from "../../components/Footer/Footer"
import './OrderInfo.css'
import { useParams } from 'react-router-dom';
import {url} from '../../constants'
import axios from 'axios'
import { useState, useEffect } from "react";


function OrderInfo(){
    const [product , setProducts] = useState([])
    const params = useParams();
    console.log('123', )

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
                <span></span>
                {product.map((item,index)=> {
                    return <ProductInOrderCard  {...item} key={index}/>
                })}
                
            </main>
            <Footer/>
        </div>
    )
}
export default OrderInfo