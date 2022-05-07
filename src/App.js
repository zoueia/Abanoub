import './App.css';
import './sass/App.css';
// import Signin from './pages/Signin';
// import Signup from './pages/Signup';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';
import Top from './components/Top';
import OrderState from './components/OrderState';
import FilterState from './components/FilterState';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Home from './pages/Home';
import Description from './pages/Desciption';

function App() {
  return (
    <div className="App">
      {/* <Payment/> */}
      <Description/>
      {/* <Cart/> */}
      {/* <Header/>
      <div id="item_card_wrapper">
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
      </div>
      <Footer/> */}

    </div>
  );
}

export default App;
