import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CoinDetails from './components/CoinDetails';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';

function App() {
  return (
    <BrowserRouter>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/coins' element={<Coins />}></Route>
        <Route path='/exchanges' element={<Exchanges />}></Route>
        <Route path='/coin/:id' element={<CoinDetails />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
