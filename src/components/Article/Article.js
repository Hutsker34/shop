import './Article.css'
import Product from '../Product/Product'
import cap from '../../assets/cap.jpg'
import glasses from '../../assets/glasses.jpg'
import pants from '../../assets/pants.jpg'
import axios from 'axios'

function Article(props){

    axios.get('http://127.0.0.1:8000/product/')
    .then(res => {
        mus.push(...res.data)
    })
    .catch(err => {
        console.log(err);
    })
    let mus = [
    {
        name: 'cap',
        cost: '3,99$',
        
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
                console.log('test',mus)
                return <Product  {...item} key={index}/>
            })}
        </div>
    )
}

export default Article