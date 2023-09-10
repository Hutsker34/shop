import './Article.css'
import Product from '../Product/Product'
import {url} from '../../constants'
import axios from 'axios'
import { useState , useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {getFiltredProducts,currentLoading} from './articleSlice'
import {setHighPrice,setProductColor ,setProductType, setlowPrice} from '../filters/filtersSlice'





function Article(props){
   
    
    let [error, setError] = useState(false)
    let dispatch = useDispatch()

    const inputValue = useSelector(state => (state.header.searchValue))
    const inputProducts = useSelector(state => (state.article.filteredProducts))
    const lowPrice = useSelector(state => (state.filters.lowPrice))
    const highPrice = useSelector(state => (state.filters.highPrice))
    

    const colors = [
        {id:'red', name: 'красный', testing_id: 'red' }, 
        {id: 'yellow', name: 'желтый', testing_id: 'yellow'},
        {id: 'blue', name: 'синий', testing_id: 'blue'}, 
        {id: 'white', name: 'белый', testing_id: 'white'}, 
        {id : 'black', name: 'черный', testing_id: 'black'}, 
        {id: 'green', name: 'зеленый', testing_id: 'green'
    }]

    const types = [
        {id:'cap', name: 'кепка' , testing_id: 'cap'}, 
        {id: 't-shirt', name: 'футболка', testing_id: 't-shirt'}, 
        {id: 'glass', name: 'очки', testing_id: 'glass'}, 
        {id: 'skirt', name: 'юбка', testing_id: 'skirt'}, 
        {id : 'pants', name: 'штаны', testing_id: 'pants'}, 
        {id: 'jamper', name: 'свитер', testing_id: 'jamper'
    }]
    useEffect(()=>{
        axios.get(`${url}/products/`)
    .then(res => {
        dispatch(getFiltredProducts(res.data))
        
    })
    .catch(err => {
        console.log(err);
    })  
    }, [])

    console.log(inputProducts)

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
        const id = event.target.id
        const checked = event.target.checked
        dispatch(setProductType({id,checked}))
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
                
            })
        .then(res => {
            
            
            dispatch(getFiltredProducts(res.data))
        })
        .catch(err => {
            console.log(err);
        })  
        
       
    }


    if(!inputProducts || inputProducts.length == 0){
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
                            <input onChange={addColor} data-testid={item.testing_id} id={item.id} name='color' value={item.id} type="checkbox"  />
                            <label htmlFor={item.id}>{item.name}</label>
                        </div>
                    )
                    
                })}
                


                <p className='form__p'>тип:</p>


                
                {types.map((item,index) =>{
                    return(
                        <div  key={`types-${index}`} className='filters__color--wrap'>
                            <input onChange={addTypes} data-testid={item.testing_id} id={item.id} name='clothType' value={item.id} type="checkbox"  />
                            <label htmlFor={item.id}>{item.name}</label>
                        </div>
                    )
                    
                })}

                
                <div className='aside__input--wrap'>
                    <label>цена от:</label>
                    <input type='number' onChange={addLowprice} placeholder='0,00$'></input>
                </div>
                <div className='aside__input--wrap'>
                    <label>цена до:</label>
                    <input data-testid='highPrice' type='number' onChange={addHighprice} placeholder='0,00$'></input>
                </div>
                { error &&
                    <div className='error__message'>
                        указанно некорректное значение 
                    </div>
                }
                <button type='submit' data-testid='test_find-btn'  className='aside__btn'>find</button>
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