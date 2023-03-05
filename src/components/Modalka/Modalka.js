import './Modalka.css'
import { useDispatch, useSelector} from 'react-redux'
import { closeModal, decrement } from '../Article/articleSlice'


function Modalka(props){
    const dispatch = useDispatch()
    let product = useSelector((state) => state.article.product)
    console.log('rrr',product)
    if(useSelector((state => state.article.visible)) == false){
        return null
    }
    return(
        <div className='modal'>
            <div className='modal__window'>
                <p>are you sure?</p>
                <button onClick = {() => dispatch(decrement(product.id))}>yes</button>
                <button onClick = {() => dispatch(closeModal())}>X</button>
            </div>
        </div>       
    )     
}

export default Modalka