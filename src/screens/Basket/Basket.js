import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Basket.css'
import { useDispatch, useSelector} from 'react-redux'
import Modalka from "../../components/Modalka/Modalka";
import { useState } from 'react'
import { decrement } from "../../components/Article/articleSlice";


function Basket(){
    const dispatch = useDispatch()
    let mus = useSelector((state) => state.article.products)
    const [visible, setVisible ] = useState(false)
    const [ _currentProduct , setCurrentProduct ] = useState({})
    function openModal(product){
        setVisible(true)
        setCurrentProduct(product)
    }

    return(
        <div className='basket'>
            <Header/>
            <article className='basket__article'>
                <div className='basket__article--wrap'>
                    {mus.map((item,index)=> {
                        const product = {
                            ...item, 
                            showDeleteBtn: true,
                            openModal,
                        }
                        return <Product {...product} key={index}/>
                    })}
                    {mus.length == 0 &&
                        <p className="article__wrap--validation">
                            здесь пока ничего нет(
                        </p>
                    }

                </div>
                <div className='basket__article--payment'>
                    <input className='payment__input payment__card--number'/>
                        <div className='payment__wrap'>
                            <input className='payment__input'/>
                            <input className='payment__input'/>
                        </div>
                    <button className='payment__button'>buy</button>
                </div>
                <Modalka ale = {() => dispatch(decrement(_currentProduct.id))} visible = {visible} setVisible = {setVisible}/>
            </article>
            <Footer/>
        </div>
    )
}

export default Basket