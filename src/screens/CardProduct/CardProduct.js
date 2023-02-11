import './CardProduct.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import cap from '../../assets/cap.jpg'
import { useDispatch } from 'react-redux'
import { increment } from '../../components/Article/articleSlice'

function CardProduct(){
    const dispatch = useDispatch()

    return(
        <div className='cardProduct'>
            <Header/>
            <article className='cardProduct__article'>
                <div className='article__form'>
                    <img className='article__form--img' src={cap} alt='product'/>
                    <div className='article__form--info'>
                        <h1 className='form__info--name'>cap</h1>
                        <p className='form__info--cost'>3,99$</p>
                        <p className='article__additionalInfo'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            quis vestibulum massa. Donec diam arcu, venenatis et ante eget, 
                            fermentum varius sem. Vivamus ipsum velit, maximus lobortis consequat 
                            eget, tristique ut libero. Suspendisse convallis libero vitae hendrerit 
                            sodales. In posuere eros vel arcu scelerisque, ac laoreet magna suscipit. 
                            Aliquam erat volutpat. Fusce eu maximus dolor. Aliquam lobortis odio eu 
                            sapien consectetur semper. Praesent mollis, libero in finibus consequat, 
                            enim est ultricies odio, accumsan porttitor mauris urna eu augue. Fusce 
                            maximus mauris at nisl gravida, ut dignissim ex convallis. Vestibulum 
                            molestie et dui eget placerat. In quis justo nulla. Nulla luctus, eros 
                            vel iaculis laoreet, massa nisi interdum felis, vitae viverra mi nibh sed 
                            mauris.
                        </p>
                        <button onClick={() => dispatch(increment())} className='info__btn-add'>add to basket</button>
                    </div>
                </div>
                
            </article>
            <Footer/>
        </div>
    )
}

export default CardProduct