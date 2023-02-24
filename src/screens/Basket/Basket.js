import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Basket.css'
import { useSelector} from 'react-redux'

function Basket(){
    let mus = useSelector((state) => state.article.products)
    

    return(
        <div className='basket'>
            <Header/>
            <article className='basket__article'>
                <div className='basket__article--wrap'>
                    {mus.map((item,index)=> {
                        const product = {
                            ...item, 
                            showDeleteBtn: true
                        }
                        return <Product {...product} key={index}/>
                    })}
                </div>
                <div className='basket__article--payment'>
                    <input className='payment__input payment__card--number'/>
                        <div className='payment__wrap'>
                            <input className='payment__input'/>
                            <input className='payment__input'/>
                        </div>
                    <button className='payment__button'>buy</button>
                </div>
            </article>
            <Footer/>
        </div>
    )
}

export default Basket