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

    function addFilters(event){

        const form = event.target;
        const selectedColors = Array.from(form.elements.color)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        event.preventDefault();
            axios.post(`${url}/products_search/`,{
                selectedColors
            })
        .then(res => {
            console.log(res)
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err);
        })  
    }


    if(loading){
        return(
            <div>loading</div>
        )
    }
    return(
        <div className='article'>
            <form  onSubmit={addFilters} className='article__filters'>
                <div className='filters__color--wrap'>
                    <input name='color' value='red' type="checkbox"  />
                    <label for="red">Красный</label>
                </div>

                <div className='filters__color--wrap'>
                    <input name='color' value='yellow' type="checkbox"  />
                    <label for="yellow">Желтый</label>
                </div>
                
                <div className='filters__color--wrap'>
                    <input name='color' value='while' type="checkbox"  />
                    <label for="white">Белый</label>
                </div>
                
                <div className='filters__color--wrap'>
                    <input name='color' value='black' type="checkbox"  />
                    <label for="black">Черный</label>
                </div>
                <div className='filters__color--wrap'>
                    <input name='color' value='blue' type="checkbox"  />
                    <label for="black">Синий</label>
                </div>
                
                <div className='aside__input--wrap'>
                    <label>цена от:</label>
                    <input placeholder='0,00$'></input>
                </div>
                <div className='aside__input--wrap'>
                    <label>цена до:</label>
                    <input placeholder='0,00$'></input>
                </div>
                <button type='submit'  className='aside__btn'>find</button>
            </form>
            <div className='article__products'> 
                {products.map((item,index)=> {
                    return <Product  {...item} key={index}/>
                })}
            </div>
            
        </div>
    )
}

export default Article