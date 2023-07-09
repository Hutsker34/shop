import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './screens/Basket/Basket';
import Landing from './screens/Landing/Landing';
import CardProduct from './screens/CardProduct/CardProduct';
import BuyScreen from './screens/BuyScreen/BuyScreen'
import UserProfile from './screens/UserProfile/UserProfile';
import OrdersHistory from './screens/OrdersHistory/OrdersHistory';
import OrderInfo from './screens/OrderInfo/OrderInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/card-product/:id' element={<CardProduct/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/buyForm' element={<BuyScreen/>}/>
        <Route path='/userProfile' element={<UserProfile/>}/>
        <Route path='/ordersHistory' element={<OrdersHistory/>}/>
        <Route path='/orderInfo/:id' element={<OrderInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
