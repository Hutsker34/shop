import './Article.css'
import Product from '../Product/Product'
import {url} from '../../constants'
import axios from 'axios'
import { useState , useEffect } from 'react';
import { set } from 'react-hook-form';


function Article(props){
    let [loading , setLoading] = useState(true)
    let [products, setProducts] = useState([])
    let [lowPrice , setLowPrice] = useState(0)
    let [highPrice, setHighPrice]= useState(500)
    let [error, setError] = useState(false)

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


    function addLowprice(event){
        setLowPrice(+event.target.value)
        setError(false)
    }
    function addHighprice(event){
        
        setHighPrice(+event.target.value)
        setError(false)
        
    }

    function addFilters(event){

        const form = event.target;
        const selectedColors = Array.from(form.elements.color)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        event.preventDefault();
        
        if(lowPrice > highPrice){
            setError(true)
            return
        }
            axios.post(`${url}/products_search/`,{
                selectedColors,
                lowPrice: lowPrice ? lowPrice : undefined,
                highPrice: highPrice ? highPrice : 500
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
                    <input onChange={addLowprice} placeholder='0,00$'></input>
                </div>
                <div className='aside__input--wrap'>
                    <label>цена до:</label>
                    <input onChange={addHighprice} placeholder='0,00$'></input>
                </div>
                { error &&
                    <div className='error__message'>
                        указанно некорректное значение 
                    </div>
                }
                <button type='submit'  className='aside__btn'>find</button>
            </form>
            <div className='article__products'> 
                {products.map((item,index)=> {
                    return <Product  {...item} key={index}/>
                })}
            </div>
            {products.length == 0 &&
                <div className='no__find--results'> нет результатов поиска по вашему запросу( </div>
            }
            
        </div>
    )
}

export default Article