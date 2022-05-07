
import Top from '../components/Top';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import Footer from '../components/Footer';
import Button from '../components/Button';

function Cart() {
  return (
    <div className="App">
      <Header/>
      <Top/>
      <div id='cartCards_wrapper'>
         <CartCard/>
         <CartCard/>
         <CartCard/>
      </div>
      <Button/>
      <Footer/>
    </div>
  );
}

export default Cart;