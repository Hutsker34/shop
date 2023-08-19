import './CardProduct.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { increment } from '../../components/Article/articleSlice'
import { useSelector} from 'react-redux'
import axios from 'axios'
import { url } from '../../constants'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function CardProduct(props){
    const [data ,setData] = useState([])
    const productInfo = useSelector((state) => state.article.product)
    const dispatch = useDispatch()
    const params = useParams();
    

    useEffect(() => {
    axios.get(`${url}/product/${params.id}/`)
    .then(res => {
        setData(res.data)
        
    })
}, [params.id])

    return(
        <div className='cardProduct'>
            <Header/>
            <article className='cardProduct__article'>
                <div className='article__form'>
                    <img className='article__form--img' src={`${url}${data.img}`} alt='product'/>
                    <div className='article__form--info'>
                        <h1 className='form__info--name'>{data.name}</h1>
                        <p className='form__info--cost'>{data.cost}</p>
                        <p className='article__additionalInfo'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            quis vestibulum massa. Donec diam arcu, venenatis et ante eget, 
                            fermentum varius sem. VivaproductInfo ipsum velit, maxiproductInfo lobortis consequat 
                            eget, tristique ut libero. Suspendisse convallis libero vitae hendrerit 
                            sodales. In posuere eros vel arcu scelerisque, ac laoreet magna suscipit. 
                            Aliquam erat volutpat. Fusce eu maxiproductInfo dolor. Aliquam lobortis odio eu 
                            sapien consectetur semper. Praesent mollis, libero in finibus consequat, 
                            enim est ultricies odio, accumsan porttitor mauris urna eu augue. Fusce 
                            maxiproductInfo mauris at nisl gravida, ut dignissim ex convallis. Vestibulum 
                            molestie et dui eget placerat. In quis justo nulla. Nulla luctus, eros 
                            vel iaculis laoreet, massa nisi interdum felis, vitae viverra mi nibh sed 
                            mauris.
                        </p>
                        <button onClick={() => dispatch(increment(props))} className='info__btn-add'>add to basket</button>
                    </div>
                </div>
                
            </article>
            <Footer/>
        </div>
    )
}

export default CardProduct