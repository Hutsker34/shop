import './Article.css'
import Product from '../Product/Product'
import cap from '../../assets/cap.jpg'
import glasses from '../../assets/glasses.jpg'
import pants from '../../assets/pants.jpg'

function Article(props){
    
    let mus = [
    {
        name: 'cap',
        img: cap,
        cost: '3,99$',
        id: 1
    },
    {
        name: 'glasses',
        img: glasses,
        cost: '1,99$',
        id: 2
    },
    {
        name: 'pants',
        img: pants,
        cost: '2563,92$',
        id: 3
    },
]
    
    return(
        <div className='article'>
            {mus.map((item,index)=> {
                return <Product  {...item} key={index}/>
            })}
        </div>
    )
}

export default Article