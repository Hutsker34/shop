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
            <aside className='article__filters'>
                <div className='filters__color--wrap'>
                    <input type="checkbox"  />
                    <label for="red">Красный</label>
                </div>

                <div className='filters__color--wrap'>
                    <input type="checkbox"  />
                    <label for="yellow">Желтый</label>
                </div>
                
                <div className='filters__color--wrap'>
                    <input type="checkbox"  />
                    <label for="white">Белый</label>
                </div>
                
                <div className='filters__color--wrap'>
                    <input type="checkbox"  />
                    <label for="black">Черный</label>
                </div>
                
                <div className='aside__input--wrap'>
                    <label>цена от:</label>
                    <input placeholder='0,00$'></input>
                </div>
                <div className='aside__input--wrap'>
                    <label>цена до:</label>
                    <input placeholder='0,00$'></input>
                </div>
                <button className='aside__btn'>find</button>
            </aside>
            <div className='article__products'> 
                {products.map((item,index)=> {
                    return <Product  {...item} key={index}/>
                })}
            </div>
            
        </div>
    )
}

export default Article