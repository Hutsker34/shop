import './Article.css'
import Product from '../Product/Product'
import {url} from '../../constants'
import axios from 'axios'
import { useState , useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {getFiltredProducts} from './articleSlice'
import {setHighPrice,setProductColor ,setProductType, setlowPrice} from '../filters/filtersSlice'





function Article(props){
    let [loading , setLoading] = useState(true)
    
    let [error, setError] = useState(false)
    let dispatch = useDispatch()

    const inputValue = useSelector(state => (state.header.searchValue))
    const inputProducts = useSelector(state => (state.article.filteredProducts))
    const lowPrice = useSelector(state => (state.filters.lowPrice))
    const highPrice = useSelector(state => (state.filters.highPrice))

    const colors = [
        {id:'red', name: 'красный' }, 
        {id: 'yellow', name: 'желтый'},
        {id: 'blue', name: 'синий'}, 
        {id: 'white', name: 'белый'}, 
        {id : 'black', name: 'черный'}, 
        {id: 'green', name: 'зеленый'
    }]

    const types = [
        {id:'red', name: 'красный' }, 
        {id: 'yellow', name: 'желтый'}, 
        {id: 'blue', name: 'синий'}, 
        {id: 'white', name: 'белый'}, 
        {id : 'black', name: 'черный'}, 
        {id: 'green', name: 'зеленый'
    }]
    useEffect(()=>{
        axios.get(`${url}/products/`)
    .then(res => {
        dispatch(getFiltredProducts(res.data))
        setLoading(false)
    })
    .catch(err => {
        console.log(err);
    })  
    }, [])


    function addLowprice(event){
        setError(false)
        dispatch(setlowPrice(+event.target.value))
    }
    function addHighprice(event){
        setError(false)
        dispatch(setHighPrice(+event.target.value))
    }
    function addColor(event){
        
        const id = event.target.id
        const checked = event.target.checked
        dispatch(setProductColor({id,checked}))
    }
    function addTypes(event){
        
        dispatch(setProductColor(+event.target.checked))
    }

    function addFilters(event){

        const form = event.target;
        const selectedColors = Array.from(form.elements.color)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        const selectedTypes = Array.from(form.elements.clothType)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
        
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
            
            
            dispatch(getFiltredProducts(res.data))
        })
        .catch(err => {
            console.log(err);
        })  
        
        dispatch(setProductType(selectedTypes))
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

                
                {colors.map((item,index) =>{
                    return(
                        <div  key={`colors-${index}`} className='filters__color--wrap'>
                            <input onChange={addColor} id={item.id} name='color' value={item.id} type="checkbox"  />
                            <label htmlFor={item.id}>{item.name}</label>
                        </div>
                    )
                    
                })}
                


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
                    <input type='number' onChange={addLowprice} placeholder='0,00$'></input>
                </div>
                <div className='aside__input--wrap'>
                    <label>цена до:</label>
                    <input type='number' onChange={addHighprice} placeholder='0,00$'></input>
                </div>
                { error &&
                    <div className='error__message'>
                        указанно некорректное значение 
                    </div>
                }
                <button type='submit'  className='aside__btn'>find</button>
            </form>
            <div className='article__products'> 
                {inputProducts.map((item,index)=> {
                    return <Product  {...item} key={index}/>
                })}
            </div>
            {inputProducts.length == 0 &&
                <div className='no__find--results'> нет результатов поиска по вашему запросу( </div>
            }
            
        </div>
    )
}

export default Article