import './UserProfile.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Link } from 'react-router-dom'


function UserProfile(){
    return(
        <div className='site'>
            <Header/>
            <main className="site__main">
                <Link className='history__link' to="/ordersHistory">
                    <p className='site__main--history'>orders history</p>
                </Link>
                
            </main>
            <Footer/>
        </div>
    )
}

export default UserProfile