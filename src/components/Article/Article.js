import './Article.css'
import Product from '../Product/Product'
import {url} from '../../constants'
import axios from 'axios'
import { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';




function Article(props){
    let [loading , setLoading] = useState(true)
    let [products, setProducts] = useState([])
    let [lowPrice , setLowPrice] = useState(0)
    let [highPrice, setHighPrice]= useState(500)
    let [error, setError] = useState(false)

    const inputValue = useSelector(state => (state.header.searchValue))
    const inputProducts = useSelector(state => (state.header.filteredProducts))



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

        const selectedTypes = Array.from(form.elements.clothType)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
        console.log(form.elements.color)
        event.preventDefault();
        
        if(lowPrice > highPrice){
            setError(true)
            return
        }
            axios.post(`${url}/products_search/`,{
                searchValue: inputValue,
                selectedColors,
                selectedTypes,
                lowPrice: lowPrice ? lowPrice : undefined,
                highPrice: highPrice ? highPrice : 500,
                filteredProducts: inputProducts
            })
        .then(res => {
            console.log('12345',res)
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

                <p className='form__p'>цвет:</p>

                <div className='filters__color--wrap'>
                    <input id='red' name='color' value='red' type="checkbox"  />
                    <label htmlFor="red">Красный</label>
                </div>

                <div className='filters__color--wrap'>
                    <input name='color' value='yellow' type="checkbox"  />
                    <label htmlFor="yellow">Желтый</label>
                </div>
                
                <div className='filters__color--wrap'>
                    <input name='color' value='while' type="checkbox"  />
                    <label htmlFor="white">Белый</label>
                </div>
                
                <div className='filters__color--wrap'>
                    <input name='color' value='black' type="checkbox"  />
                    <label htmlFor="black">Черный</label>
                </div>
                <div className='filters__color--wrap'>
                    <input name='color' value='blue' type="checkbox"  />
                    <label htmlFor="black">Синий</label>
                </div>
                <div className='filters__color--wrap'>
                    <input name='color' value='green' type="checkbox"  />
                    <label htmlFor="green">Зеленый</label>
                </div>


                <p className='form__p'>тип:</p>


                <div className='filters__color--wrap'>
                    <input name='clothType' value='cap' type="checkbox"  />
                    <label htmlFor="red">кепка</label>
                </div>

                <div className='filters__color--wrap'>
                    <input name='clothType' value='jamper' type="checkbox"  />
                    <label htmlFor="red">свитер</label>
                </div>
                
                <div className='filters__color--wrap'>
                    <input name='clothType' value='T-shirt' type="checkbox"  />
                    <label htmlFor="red">футболка</label>
                </div>
                
                <div className='filters__color--wrap'>
                    <input name='clothType' value='glass' type="checkbox"  />
                    <label htmlFor="red">очки</label>
                </div>
                <div className='filters__color--wrap'>
                    <input name='clothType' value='skirt' type="checkbox"  />
                    <label htmlFor="red">юбка</label>
                </div>
                <div className='filters__color--wrap'>
                    <input name='clothType' value='pants' type="checkbox"  />
                    <label htmlFor="pants">штаны</label>
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