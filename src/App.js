import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './screens/Basket/Basket';
import Landing from './screens/Landing/Landing';
import CardProduct from './screens/CardProduct/CardProduct';
import BuyScreen from './screens/BuyScreen/BuyScreen';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/card-product' element={<CardProduct/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/buyForm' element={<BuyScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
