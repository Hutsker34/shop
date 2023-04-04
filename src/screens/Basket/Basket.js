import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Basket.css'
import { useDispatch, useSelector} from 'react-redux'
import Modalka from "../../components/Modalka/Modalka";
import { decrement, openModal } from "../../components/Article/articleSlice";
import { Link } from "react-router-dom";



function Basket(){
    const dispatch = useDispatch()
    let products = useSelector((state) => state.article.products)
    function generalcost(){
        let general = 0
        for(let i = 0; i < products.length; i++){
            let cost = products[i].cost.replace(',' , '.')
            general += parseFloat(cost) * products[i].amount
        }
        return 'total cost:  ' + general.toFixed(2) + '$'
    }

    return(
        <div className='basket'>
            <Header/>
            <article className='basket__article'>
                <div className='basket__article--wrap'>
                    {products.map((item,index)=> {
                        const product = {
                            ...item, 
                            showDeleteBtn: true,
                            
                        }
                        return <Product {...product} key={index}/>
                    })}
                    {products.length == 0 &&
                        <p className="article__wrap--validation">
                            здесь пока ничего нет(
                        </p>
                    }

                </div>
                <div className="generalCost">{generalcost()}</div>
                <Link className="basket__link" to="/buyForm">
                    <button >Buy</button>
                </Link>
                <Modalka modalOpen = {() => dispatch(decrement(openModal()))} />
            </article>
            <Footer/>
        </div>
    )
}

export default Basket