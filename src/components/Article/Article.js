import './Article.css'
import Product from '../Product/Product'
import {url} from '../../constants'
import axios from 'axios'
import { useState , useEffect } from 'react';


function Article(props){
    let [loading , setLoading] = useState(true)
    let [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get(`${url}/products/`)
    .then(res => {
        setProducts(res.data)
        setLoading(false)
    })
    .catch(err => {
        console.log(err);
    })  
    }, [])


    if(loading){
        return(
            <div>loading</div>
        )
    }
    return(
        <div className='article'>
            {products.map((item,index)=> {
                return <Product  {...item} key={index}/>
            })}
        </div>
    )
}

export default Article